import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import useFlagManager from 'hooks/useFlagManager';
import authService from 'modules/auth/service';
import { setUserAction } from 'modules/auth/store/actions';
import { getUserSelector } from 'modules/auth/store/selectors';

import routesByName from 'constants/routesByName';

import {
  Container,
  Avatar,
  UserName,
  ArrowDown,
  Popover,
  MenuListItem,
  MenuIcon,
} from './styles';

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
        <Avatar placeholder={`${user?.name[0]}${user?.surname[0]}`} size={30} />
        <UserName>{user?.name || ''}</UserName>
        <ArrowDown />
      </Container>
      <Popover
        anchorEl={anchorRef.current}
        open={popover.state}
        onClose={popover.turnOff}
      >
        <MenuListItem>
          <MenuIcon name="user" />
          Profile
        </MenuListItem>
        <MenuListItem>
          <MenuIcon name="settings" />
          Settings
        </MenuListItem>
        <MenuListItem>
          <MenuIcon name="question" />
          FAQ
        </MenuListItem>
        <MenuListItem onClick={onSignOut}>
          <MenuIcon name="sign-out" />
          Sign out
        </MenuListItem>
      </Popover>
    </>
  );
};
