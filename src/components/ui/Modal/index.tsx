import React, { memo, ReactNode } from 'react';

import { Backdrop, Content } from './styles';

export interface IModalProps {
  size?: 'sm' | 'md' | 'lg';
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode | ReactNode[] | Element | Element[];
}

const Modal = memo<IModalProps>(
  ({ isOpen, onClose, children, size, ...props }) => {
    return (
      isOpen && (
        <>
          <Backdrop onClick={onClose} />
          <Content size={size} {...props}>
            {children}
          </Content>
        </>
      )
    );
  }
);

export { Modal };
