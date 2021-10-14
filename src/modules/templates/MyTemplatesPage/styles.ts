import styled from 'styled-components';

import { Box } from 'components/ui';
import { ContentContainer } from 'components/common';

export { TemplatesTable } from 'modules/templates/MyTemplatesPage/components/TemplatesTable';

export { PageTitle as Title } from 'components/ui';
export const Content = styled(ContentContainer).attrs({
  withNavbar: true,
})``;

export const Container = styled(Box).attrs({ bg: 'grey' })`
  min-height: 100vh;
`;

export const EmptyContainer = styled(Box).attrs({ mt: 100, fontSize: 6 })`
  justify-content: center;
  display: flex;
`;
