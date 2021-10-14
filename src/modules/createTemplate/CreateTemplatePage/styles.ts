import styled from 'styled-components';

import { Box, Text, Button } from 'components/ui';
import { ContentContainer } from 'components/common';
import { ParseTimePickerField as ParseTimePickerFieldUI } from 'components/formControls';

export { TextInputField, ParseField } from 'components/formControls';
export { RowBetween } from 'components/common';

export const Content = styled(ContentContainer).attrs({
  withNavbar: true,
})``;

// export const Container = styled(Box).attrs({ bg: 'grey' })`
//   height: 100vh;
// `;

export const Title = styled(Text).attrs({ fontSize: 5, color: 'darkBlue' })``;

export const FormWrapper = styled(Box)`
  max-width: 800px;
  width: 100%;
  margin: 50px auto 0;
`;

export const SubmitButton = styled<any>(Button).attrs({
  variant: 'darkFilled',
  size: 'sm',
})`
  width: 40%;
`;
export const AddFieldButton = styled<any>(Button).attrs({
  variant: 'darkOutlined',
  size: 'sm',
})`
  width: 40%;
`;

export const ParseTimePickerField = styled(ParseTimePickerFieldUI).attrs({
  mt: 4,
})``;
