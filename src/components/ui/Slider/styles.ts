import styled from 'styled-components';

import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';

export { Row } from 'components/common';

export const Container = styled(Box)``;

export const SliderContainer = styled(Box).attrs({ mx: 5 })`
  width: 100%;
`;

export const StaticValue = styled(Text)``;

export const SliderText = styled(Text).attrs({ mb: 10 })``;
