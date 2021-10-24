import styled from 'styled-components';

import { Box } from 'components/ui';

export { NavLink } from './NavLink';

export const Row = styled(Box)`
  display: flex;
  align-items: center;
`;
export const RowCenter = styled<any>(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RowBetween = styled<any>(Row)`
  justify-content: space-between;
`;
export const RowAround = styled(Row)`
  justify-content: space-evenly;
`;

export const Column = styled<any>(Box)`
  display: flex;
  flex-direction: column;
`;

export const ColumnHalf = styled(Column)`
  width: 49%;
`;

export const UnAuthContentContainer = styled<any>(Box).attrs({ px: 4 })`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
`;
export const AuthContentContainer = styled<any>(Box).attrs({ px: 4 })`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
