import styled from 'styled-components';

import { Box, Text, ContentContainer } from 'components/ui';
import { space } from 'styled-system';

export { Template } from 'components/blocks';

export const Content = styled(ContentContainer).attrs({
  withNavbar: true,
  pt: 4,
})`
  ${space}
`;

export const Container = styled(Box).attrs({ bg: 'grey' })`
  min-height: 100vh;
`;

export const Title = styled(Text).attrs({ mt: 3, fontSize: 6 })``;

export const TemplatesContainer = styled(Box).attrs({ mt: 100 })`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;
