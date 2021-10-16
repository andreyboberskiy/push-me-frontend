import React, { useMemo } from 'react';

interface ISizeConfig {
  lg: number;
  md: number;
  sm: number;
}

const sizeConfig: ISizeConfig = {
  lg: 28,
  md: 16,
  sm: 12,
};

export interface ISpriteIconProps {
  name: string;
  size?: 'md' | 'lg' | 'sm';
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
