//  , ValueText

import styled from 'styled-components';
import theme from 'styles/theme';

import { Box, Text } from 'components/ui';

export { StatusCircle } from 'components/ui';

export const Container = styled(Box).attrs({ bg: 'grey', py: 4 })`
  max-width: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid ${theme.colors.gray1};
  border-top: none;

  cursor: pointer;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${theme.colors.gray2};
  }
`;

export const ValueContainer = styled(Box)<{ width: number }>`
  max-width: ${(props) => props.width}%;
  width: 100%;
`;

export const ValueText = styled(Text)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
