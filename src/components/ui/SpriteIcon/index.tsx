import React, { useMemo } from 'react';

interface ISizeConfig {
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

const sizeConfig: ISizeConfig = {
  lg: 32,
  md: 24,
  sm: 16,
  xs: 12,
};

export interface ISpriteIconProps {
  name: string;
  size?: 'md' | 'lg' | 'sm' | 'xs';
}

export const SpriteIcon: React.FC<ISpriteIconProps> = ({
  name,
  size = 'md',
  ...props
}) => {
  const widthHeight = useMemo(() => {
    const number = sizeConfig[size];

    if (number) {
      return {
        width: number,
        height: number,
      };
    }

    return {};
  }, [size]);

  return (
    <svg {...widthHeight} {...props}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
