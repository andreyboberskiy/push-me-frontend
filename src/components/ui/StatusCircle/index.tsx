import React from 'react';

import { Circle } from './styles';

// Interface
interface IStatusCircleProps {
  active: boolean;
  size?: number;
}

export const StatusCircle: React.FC<IStatusCircleProps> = ({
  active,
  size,
}) => {
  return <Circle active={active} size={size} />;
};
