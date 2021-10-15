import styled from 'styled-components';

import {
  FormSubmitButton,
  TextInputField as TextInputFieldUI,
} from 'components/formControls';

import { Text } from 'components/ui';

export { RowCenter as Row } from 'components/common';

export const TextInputField = styled(TextInputFieldUI).attrs({
  layoutBg: 'gray50',
})``;

export const PasswordField = styled(TextInputField).attrs((props) => ({
  endIcon: {
    name: props.passwordShowed ? 'eye-open' : 'eye-closed',
    onClick: props.toggleShowPass,
  },
  type: props.passwordShowed ? undefined : 'password',
}))``;

export const SubmitButton = styled(FormSubmitButton).attrs({
  py: 4,
})`
  text-transform: uppercase;
  font-size: 12px;
`;

export const GrayText = styled(Text).attrs({ color: 'gray400' })`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
export const GreenText = styled(GrayText).attrs({
  color: 'teal300',
  ml: 2,
})`
  cursor: pointer;
  font-weight: 700;
`;
