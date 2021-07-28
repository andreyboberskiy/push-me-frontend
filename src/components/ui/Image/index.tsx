import React, { memo } from 'react';
import { StyledProps } from 'styled-components';

import { Wrapper, Img } from './styles';

// Interface
interface IImageProps {
  src: string;
  style?: StyledProps<any>;
  imgStyles?: StyledProps<any>;
  onClick?: () => void;
}

export const Image = memo<IImageProps>(
  ({ src, imgStyles, ...props }): JSX.Element => (
    <Wrapper {...props}>
      <Img src={src} style={imgStyles} />
    </Wrapper>
  )
);
