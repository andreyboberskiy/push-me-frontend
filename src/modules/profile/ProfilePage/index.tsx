import useTypedSelector from 'hooks/useTypedSelector';
import { getUserSelector } from 'modules/auth/store/selectors';

import {
  UnAuthContentContainer,
  RowBetween,
  UserAvatar,
  UserInfo,
  UserInfoLabel,
  UserInfoValue,
  SettingsContainer,
  Container,
  InfoRow,
  ChangeField,
  LogoutBtn,
} from './styles';

// ts
import { IUser } from 'types/common';
import { format } from 'date-fns';
import { useCallback } from 'react';
import authService from 'modules/auth/service';
import { useDispatch } from 'react-redux';
import { logOutAction, setUserAction } from 'modules/auth/store/actions';
import routesByName from 'constants/routesByName';
import { useHistory } from 'react-router-dom';
import { safely } from 'libs/toast/functions';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user: IUser = useTypedSelector(getUserSelector);

  const handleChangeTelegram = useCallback(
    async (telId) => {
      await safely(async () => {
        const { user: updatedUser } = await authService.addTelegramId(telId);
        dispatch(setUserAction(updatedUser));
      });
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logOutAction());

    history.replace(routesByName.homePage);
  }, [dispatch, history]);

  return user ? (
    <UnAuthContentContainer withNavbar>
      <Container>
        <RowBetween>
          <UserAvatar user={user} />
          <UserInfo>
            <InfoRow>
              <UserInfoLabel>Id</UserInfoLabel>
              <UserInfoValue>{user.id}</UserInfoValue>
            </InfoRow>
            <InfoRow>
              <UserInfoLabel>Name</UserInfoLabel>
              <UserInfoValue>{user.name}</UserInfoValue>
            </InfoRow>
            <InfoRow>
              <UserInfoLabel>Surname</UserInfoLabel>
              <UserInfoValue>{user.surname}</UserInfoValue>
            </InfoRow>
            <InfoRow>
              <UserInfoLabel>Email</UserInfoLabel>
              <UserInfoValue>{user.email}</UserInfoValue>
            </InfoRow>

            <InfoRow>
              <UserInfoLabel>Created</UserInfoLabel>
              <UserInfoValue>
                {format(new Date(user.dateCreated), 'dd.MM.yyyy')}
              </UserInfoValue>
            </InfoRow>
            <InfoRow>
              <UserInfoLabel>Telegram Chat Id</UserInfoLabel>

              <ChangeField
                name="telegramId"
                value={
                  user.telegramChatId ? user.telegramChatId : 'Not connected'
                }
                onChange={handleChangeTelegram}
              />
            </InfoRow>

            <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
          </UserInfo>
          <SettingsContainer />
        </RowBetween>
      </Container>
    </UnAuthContentContainer>
  ) : null;
};

export default ProfilePage;
