import React, { memo, ReactNode } from 'react';

import { ModalUI, Content, CloseButton } from './styles';

import { ModalProps } from '@material-ui/core/Modal/Modal';

export interface IModalProps extends Omit<ModalProps, 'open'> {
  size?: 'sm' | 'md' | 'lg';
  isOpen: boolean;
}

const Modal = memo<IModalProps>(
  ({ isOpen, onClose, children, size = 'md', ...props }) => {
    return (
      <ModalUI open={isOpen} onClose={onClose}>
        <Content size={size} {...props}>
          <CloseButton onClick={onClose} />
          {children}
        </Content>
      </ModalUI>
    );
  }
);

export { Modal };
