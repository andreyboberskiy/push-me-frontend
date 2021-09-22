import styled from 'styled-components';
import { Box } from 'components/ui';

export const Row = styled(Box)`
  display: flex;
  align-items: center;
`;
export const RowCenter = styled(Box)`
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
