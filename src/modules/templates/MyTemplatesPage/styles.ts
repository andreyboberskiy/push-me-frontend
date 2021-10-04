import styled from 'styled-components';

import { Box, ContentContainer } from 'components/ui';

export { TemplatesTable } from 'modules/templates/MyTemplatesPage/components/TemplatesTable';

export { PageTitle as Title } from 'components/ui';
export const Content = styled(ContentContainer).attrs({
  withNavbar: true,
})``;

export const Container = styled(Box).attrs({ bg: 'grey' })`
  min-height: 100vh;
`;
