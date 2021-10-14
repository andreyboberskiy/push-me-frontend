import styled from 'styled-components';

import { Box, Button } from 'components/ui';

import { TextInputField as TextInputFieldUI } from 'components/formControls';

export const TextInputField = styled(TextInputFieldUI)`
  & + & {
    margin-top: 24px;
  }
`;

export const Container = styled(Box).attrs({ p: 5 })``;

export const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

export const SubmitButton = styled(Button).attrs({
  variant: 'lightFilled',
  size: 'sm',
})`
  margin: 32px auto 0;
`;
