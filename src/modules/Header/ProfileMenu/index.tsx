import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';

import { getUserSelector } from 'modules/auth/store/selectors';
import useFlagManager from 'hooks/useFlagManager';
import authService from 'modules/auth/service';

import {
  Container,
  UserAvatar,
  UserName,
  ArrowDown,
  Popover,
  MenuListItem,
} from './styles';
import { setUserAction } from 'modules/auth/store/actions';
import routesByName from 'constants/routesByName';
import { useHistory } from 'react-router-dom';

export const ProfileMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(getUserSelector);

  const anchorRef = useRef();

  const popover = useFlagManager(false);

  const onSignOut = useCallback(() => {
    popover.turnOff();
    authService.clearAuthTokens();
    history.push(routesByName.signIn);
    dispatch(setUserAction(null));
  }, [history, dispatch, popover]);

  return (
    <>
      <Container ref={anchorRef} onClick={popover.turnIn}>
        <UserAvatar user={user} size={30} />
        <UserName>{user?.name || ''}</UserName>
        <ArrowDown />
      </Container>
      <Popover
        anchorEl={anchorRef.current}
        open={popover.state}
        onClose={popover.turnOff}
      >
        <MenuListItem>Profile</MenuListItem>
        <MenuListItem>Settings</MenuListItem>
        <MenuListItem>FAQ</MenuListItem>
        <MenuListItem onClick={onSignOut}>Sign out</MenuListItem>
      </Popover>
    </>
  );
};
