import styled from 'styled-components';

import { Box, Text } from 'components/ui';

export const Container = styled(Box).attrs({ p: 5, bg: 'white' })`
  border-radius: 16px;
  box-shadow: 4px 4px 18px 1px rgba(34, 60, 80, 0.2);
`;

export const Title = styled(Text).attrs({
  fontSize: 5,
  mb: 4,
  color: 'black',
  fontFamily: 0,
})``;
export const Url = styled(Text).attrs({ fontSize: 3, color: 'lightBlue' })`
  text-align: left;
`;
export const InfoText = styled(Text).attrs({
  fontSize: 3,
  mt: 2,
  color: 'black',
  fontFamily: 1,
})`
  text-align: left;
`;

export const Column = styled<any>(Box)``;
export const RowBetween = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
