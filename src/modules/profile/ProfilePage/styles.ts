import styled from 'styled-components';

import {
  Box,
  Text,
  UserAvatar as UserAvatarUI,
  ChangeField as ChangeFieldUI,
  Button as ButtonUI,
} from 'components/ui';
import { Row } from 'components/common';

export { UnAuthContentContainer } from 'components/common';

export const InfoRow = styled(Row)`
  &:not(:first-child) {
    margin-top: 32px;
  }
`;
export const RowBetween = styled(Row)`
  justify-content: space-between;
  align-items: flex-start;
`;
export const UserInfo = styled(Box).attrs({
  py: 12,
  px: 10,
  ml: 100,
  bg: 'grey2',
})`
  border-radius: 30px;
  width: 100%;
`;

export const UserInfoLabel = styled(Text).attrs({
  mr: 10,
  fontSize: 5,
  fontFamily: 0,
})`
  text-align: left;
  min-width: 300px;
  font-weight: 600;
`;
export const UserInfoValue = styled(Text).attrs({
  fontSize: 5,
  fontFamily: 1,
})`
  font-weight: 600;
  text-align: left;
`;

export const SettingsContainer = styled(Box)``;
export const Container = styled(Box).attrs({ mt: 10 })`
  width: 100%;
`;

export const UserAvatar = styled(UserAvatarUI)`
  max-width: 250px;
  height: 250px;
  width: 100%;
`;

export const ChangeField = styled(ChangeFieldUI).attrs({
  labelStyles: {
    fontSize: 5,
    fontFamily: 1,
  },
  inputProps: {
    label: 'Telegram chat id',
  },
})``;

export const LogoutBtn = styled(ButtonUI).attrs({ size: 'sm', mt: 10 })`
  margin-left: auto;
`;
