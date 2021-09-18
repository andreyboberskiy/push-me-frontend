import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

import { modalSize } from 'styles/variants';

import { Box } from 'components/ui/Box';

export const ModalUI = styled(Modal)``;

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

  outline: none;

  border-radius: 30px;
  ${modalSize}
`;

export const CloseButton = styled<any>(Box).attrs({
  bg: 'grey',
})`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  cursor: pointer;
`;
