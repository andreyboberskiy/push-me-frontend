import styled from 'styled-components';

import { modalSize } from 'styles/variants';

import { Box } from 'components/ui/Box';

export const Backdrop = styled(Box)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const Content = styled<any>(Box).attrs({
  bg: 'white',
})`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);

  height: 90vh;
  overflow: auto;
  z-index: 9999;
  ${modalSize}
`;

export const CloseButton = styled(Box).attrs({
  bg: 'grey',
})`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;
