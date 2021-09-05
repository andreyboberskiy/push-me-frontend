import styled from 'styled-components';
import { space } from 'styled-system';

import { Box, Text, ContentContainer, Button } from 'components/ui';
import { TextInputField, ParseField } from 'components/fields';

export { Template } from 'components/blocks';

export const Content = styled(ContentContainer).attrs({
  withNavbar: true,
  pt: 4,
})`
  ${space}
`;

export const Container = styled(Box).attrs({ bg: 'grey' })`
  height: 100vh;
`;

export const Title = styled(Text).attrs({ fontSize: 5, color: 'darkBlue' })``;

export const FormWrapper = styled(Box)`
  max-width: 800px;
  width: 100%;
  margin: 50px auto 0;
`;

export const SubmitButton = styled<any>(Button).attrs({ size: 'sm' })`
  justify-self: center;
`;
export const QueryField = styled<any>(ParseField).attrs({ mt: 3 })`
  ${space}
`;
export const TextField = styled(TextInputField).attrs({})``;
