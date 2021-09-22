import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Close from '@material-ui/icons/CloseRounded';

import { modalSize } from 'styles/variants';

import { Box } from 'components/ui/Box';
import { color } from 'styled-system';
import theme from 'styles/theme';

export const ModalUI = styled(Modal)``;

export const Content = styled<any>(Box).attrs({
  bg: 'white',
})`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);

  overflow: auto;
  z-index: 9999;

  outline: none;

  ${modalSize}
`;

export const CloseButton = styled<any>(Box).attrs({
  bg: 'darkGrey',
})`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(Close).attrs({
  htmlColor: theme.colors.lightBlue,
  fontSize: 'medium',
})``;
