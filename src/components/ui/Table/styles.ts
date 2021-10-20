import styled from 'styled-components';

import { Box, Text } from 'components/ui';
import { color } from 'styled-system';

export { SortFilter as Filter } from 'components/ui';

export const TitleLabel = styled(Text).attrs({
  fontSize: 3,
  color: 'black',
  mb: 4,
  ml: 2,
})`
  text-align: left;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MainContainer = styled(Box)``;

export const Container = styled(Box).attrs({
  bg: 'transparent',
})``;

export const ItemsContainer = styled(Box)``;

export const Skeleton = styled(Box).attrs({ bg: 'gray300', mt: 4 })`
  border-radius: 15px;
  width: 100%;
  height: 48px;
`;
