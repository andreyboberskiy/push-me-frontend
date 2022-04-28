import React from 'react';
import { PopoverProps } from '@material-ui/core';

import { PopoverUI } from './styles';

// Interface
interface IProps extends PopoverProps {
  className?: string;
}

export const Popover: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <PopoverUI
      PaperProps={{ classes: { root: className } }}
      transformOrigin={{
        vertical: -10,
        horizontal: 'center',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      {...props}
    />
  );
};
