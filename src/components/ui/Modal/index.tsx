import React, { memo } from 'react';
import Backdrop from '@material-ui/core/Backdrop/Backdrop';
import Fade from '@material-ui/core/Fade/Fade';

import { ModalUI, Content, CloseButton } from './styles';

import { ModalProps } from '@material-ui/core/Modal/Modal';

export interface IModalProps extends Omit<ModalProps, 'open'> {
  size?: 'sm' | 'md' | 'lg';
  isOpen: boolean;
}

const Modal = memo<IModalProps>(
  ({ isOpen, onClose, children, size = 'md', ...props }) => {
    return (
      <ModalUI
        open={isOpen}
        onClose={onClose}
        BackdropComponent={Backdrop}
        closeAfterTransition
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={isOpen}>
          <Content size={size} {...props}>
            <CloseButton onClick={onClose} />
            {children}
          </Content>
        </Fade>
      </ModalUI>
    );
  }
);

export { Modal };
