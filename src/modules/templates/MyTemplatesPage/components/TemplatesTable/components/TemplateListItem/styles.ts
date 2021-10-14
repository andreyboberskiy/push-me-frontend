import styled from 'styled-components';

import { Box, Text } from 'components/ui';
import { color } from 'styled-system';

export { StatusCircle } from 'components/ui';

export const Container = styled(Box).attrs({ bg: 'grey', py: 4 })`
  max-width: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid ${color('grey2')};
  border-top: none;

  cursor: pointer;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${color('grey2')};
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
