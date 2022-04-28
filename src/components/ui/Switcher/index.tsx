import React from 'react';

import { SwitchProps } from '@material-ui/core/Switch/Switch';
import { SwitcherUI } from './styles';

export const Switcher: React.FC<SwitchProps> = ({ ...props }) => {
  return <SwitcherUI {...props} />;
};
