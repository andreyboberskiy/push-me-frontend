import styled from 'styled-components';

import { Box } from 'components/ui';

export { BreadCrumbs } from './BreadCrumbs';
export { HeaderSearchInput } from './HeaderSearchInput';
export { Notifications } from './Notifications';
export { ProfileMenu } from './ProfileMenu';

export const Container = styled(Box).attrs({ pr: 6 })`
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: space-between;

  min-height: 52px;
`;

export const RightSide = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  max-width: 50%;
  width: 100%;
`;
