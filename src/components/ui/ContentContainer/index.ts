import styled from 'styled-components';
import { Box } from 'components/ui/Box';

export const ContentContainer = styled<any>(Box).attrs({ px: 4 })`
  margin: 0 auto;
  max-width: 1660px;
  min-width: 1150px;
  width: 100%;

  ${(props) => props.withNavbar && 'padding-top: 150px;'}
`;
