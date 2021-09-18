import styled from 'styled-components';

import { Box, Text } from 'components/ui';

export const Container = styled(Box).attrs({ p: 3, bg: 'white' })`
  border-radius: 16px;
`;

export const Title = styled(Text).attrs({ fontSize: 5, mb: 4, color: 'black' })`
  font-family: T500;
`;
export const Url = styled(Text).attrs({ fontSize: 3, color: 'lightBlue' })`
  text-align: left;
`;
export const InfoText = styled(Text).attrs({
  fontSize: 3,
  mt: 2,
  color: 'black',
})`
  text-align: left;
`;

export const Column = styled<any>(Box)``;
export const RowBetween = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
