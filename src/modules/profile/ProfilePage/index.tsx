import useTypedSelector from 'hooks/useTypedSelector';
import { getUserSelector } from 'modules/auth/store/selectors';

import {
  ContentContainer,
  RowBetween,
  UserAvatar,
  UserInfo,
  UserInfoLabel,
  UserInfoValue,
  SettingsContainer,
  Container,
  InfoRow,
} from './styles';

// ts
import { IUser } from 'types/common';
import { format } from 'date-fns';

const ProfilePage = () => {
  const user: IUser = useTypedSelector(getUserSelector);

  return user ? (
    <ContentContainer withNavbar>
      <Container>
        <RowBetween>
          <UserAvatar user={user} />
          <UserInfo>
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
              <UserInfoLabel>Id</UserInfoLabel>
              <UserInfoValue>{user.id}</UserInfoValue>
            </InfoRow>
            <InfoRow>
              <UserInfoLabel>Created</UserInfoLabel>
              <UserInfoValue>
                {format(new Date(user.dateCreated), 'dd.MM.yyyy')}
              </UserInfoValue>
            </InfoRow>
            <InfoRow>
              <UserInfoLabel>Telegram Chat Id</UserInfoLabel>
              <UserInfoValue>
                {user.telegramChatId ? user.telegramChatId : 'Not connected'}
              </UserInfoValue>
            </InfoRow>
          </UserInfo>
          <SettingsContainer />
        </RowBetween>
      </Container>
    </ContentContainer>
  ) : null;
};

export default ProfilePage;
