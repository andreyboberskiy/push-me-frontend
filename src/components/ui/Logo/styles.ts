import styled from 'styled-components';

import { Row } from 'components/common';
import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';

export const Container = styled(Row)`
  cursor: pointer;
`;

export const RedCircle = styled(Box).attrs({
  bg: 'red500',
})`
  width: 19px;
  height: 19px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotifyText = styled(Text).attrs({ color: 'white' })`
  font-size: 14px;
  font-weight: 700;
`;

export const LogoText = styled(Text).attrs({ ml: 2, color: 'gray700' })`
  font-weight: 700;
  font-size: 22px;
`;
