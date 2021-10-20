import styled from 'styled-components';

import { Box, Text } from 'components/ui';
import { Column as ColumnUI } from 'components/common';
import { getThemeColor } from 'styles/theme';

export { StatusCircle } from 'components/ui';

export const Column = styled(ColumnUI)`
  max-width: 100%;
  width: 100%;
`;
export const Container = styled(Box).attrs({ py: 4, mt: 2 })`
  display: flex;
  justify-content: space-between;

  border-radius: 15px;

  cursor: pointer;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: ${(props) => getThemeColor(props, 'gray100')};
  }
`;

export const ValueContainer = styled(Box)<{ width: number }>`
  max-width: ${(props) => props.width}%;
  width: 100%;
`;

export const ValueText = styled(Text).attrs({ color: 'gray600' })`
  font-size: 14px;
  font-weight: 700;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Delimiter = styled(Box).attrs({ bg: 'gray100' })`
  width: calc(100% - 30px);
  margin: 0 auto;
  height: 1px;
`;
