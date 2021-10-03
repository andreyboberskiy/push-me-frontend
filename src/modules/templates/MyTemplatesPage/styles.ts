import styled from 'styled-components';

import { Box, Text, ContentContainer } from 'components/ui';
import { space } from 'styled-system';

export { TemplatesTable } from 'modules/templates/MyTemplatesPage/components/TemplatesTable';

export const Content = styled(ContentContainer).attrs({
  withNavbar: true,
  pt: 4,
})`
  ${space}
`;

export const Container = styled(Box).attrs({ bg: 'grey' })`
  min-height: 100vh;
`;

export const Title = styled(Text).attrs({ mt: 3, fontSize: 6 })`
  text-align: left;
`;
