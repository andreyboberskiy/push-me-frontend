import styled from 'styled-components';

import { Image as ImageUI } from 'components/ui/Image';
import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';

export const Image = styled(ImageUI)<{ size: number }>`
  ${(props) => `width: ${props.size}px; height: ${props.size}px;`}
  cursor: pointer;
  border-radius: 50%;
`;

export const Container = styled(Box).attrs({ bg: 'gray200' })<{ size: number }>`
  ${(props) => `width: ${props.size}px; height: ${props.size}px;`}
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Placeholder = styled(Text).attrs({
  color: 'gray700',
})`
  font-size: ${(props) => props.size * 0.5}px;
`;
