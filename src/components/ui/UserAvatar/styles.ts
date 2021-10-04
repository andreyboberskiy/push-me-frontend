import styled from 'styled-components';

import { Image as ImageUI } from 'components/ui/Image';
import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';

export const Image = styled(ImageUI)`
  width: 100%;
  border-radius: 50%;
`;

export const Container = styled(Box).attrs({ bg: 'gray3' })`
  width: 100%;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Placeholder = styled(Text).attrs({ fontSize: 10 })``;
