import styled from 'styled-components';

import { Text } from 'components/ui/Text';
import { Button } from 'components/ui/Button';
import { Row } from 'components/common';

import { TextInputField as TextInputFieldUI } from 'components/fields';

export {
  TextInputField as TextInputFieldUI,
  FormSubmitButton,
} from 'components/fields';

export const TextInputField = styled(TextInputFieldUI).attrs({ mr: 4 })``;

export const Container = styled(Row)``;

export const FormContainer = styled(Row)``;

export const Label = styled(Text).attrs({ mr: 5, fontSize: 4 })``;

export const ChangeButton = styled(Button).attrs({
  size: 'xs',
  variant: 'lightFilled',
})``;
