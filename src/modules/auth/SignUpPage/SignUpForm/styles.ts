import styled from 'styled-components';

import { Box, Text } from 'components/ui';
import { FormSubmitButton } from 'components/formControls';

export { RowCenter as Row } from 'components/common';
export { TextInputField } from 'components/formControls';

export const Container = styled(Box)``;

export const HaveAccountText = styled(Text).attrs({ color: 'gray400' })`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
export const SignInPressedText = styled(HaveAccountText).attrs({
  color: 'teal300',
  ml: 2,
})`
  cursor: pointer;
  font-weight: 700;
`;

export const SubmitButton = styled(FormSubmitButton)`
  text-transform: uppercase;
  font-size: 12px;
`;
