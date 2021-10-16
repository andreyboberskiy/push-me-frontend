import styled from 'styled-components';

import { Box } from 'components/ui';

export { Logo, TabButton } from 'components/ui';
export { NavLink, Column } from 'components/common';

export const Container = styled(Box).attrs({ px: 4 })`
  display: flex;
  flex-direction: column;

  max-width: 250px;
  width: 100%;
`;

export const LogoContainer = styled(Box).attrs({
  py: 4,
  px: 3,
})``;

export const Delimiter = styled(Box)`
  background: linear-gradient(
    90deg,
    rgba(224, 225, 226, 0) 0%,
    rgb(224, 225, 226) 49.52%,
    rgba(224, 225, 226, 0) 100%
  );
  width: 100%;
  height: 1px;
`;
