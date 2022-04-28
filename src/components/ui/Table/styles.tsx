import styled from 'styled-components';

import { Box } from 'components/ui/Box';
import { Skeleton } from 'components/ui/Skeleton';

export { SortFilter as Filter } from './SortFilter';

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MainContainer = styled(Box)``;

export const Container = styled(Box).attrs({
  bg: 'transparent',
})`
  height: 100%;
`;

export const ItemsContainer = styled(Box).attrs({ pb: 2 })`
  overflow-y: scroll;
  max-height: calc(100% - 28px);
`;

export const LoaderSkeleton = styled(Skeleton).attrs({
  variant: 'rect',
  mt: 4,
})``;
