import styled from 'styled-components';
import theme from 'styles/theme';

import { Box, Text } from 'components/ui';

export { SortFilter as Filter } from 'components/ui';

export const TitleLabel = styled(Text).attrs({
  fontSize: 3,
  color: 'black',
  mb: 4,
  ml: 2,
})`
  text-align: left;
`;

export const Header = styled(Box).attrs({
  bg: 'gray2',
})`
  display: flex;
  justify-content: space-between;
  width: 100%;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  border: 1px solid ${theme.colors.gray1};
  overflow: hidden;
`;

export const MainContainer = styled(Box).attrs({ mt: 70 })``;

export const Container = styled(Box).attrs({
  boxShadow: 1,
  bg: 'transparent',
})`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const ItemsContainer = styled(Box)``;