import React, { FC } from 'react';
import SliderUI from '@material-ui/core/Slider';

import useStyleProperties from 'hooks/useStyleProperties';

import {
  Container,
  SliderContainer,
  StaticValue,
  Row,
  SliderText,
} from './styles';

// Interface
import { SliderTypeMap } from '@material-ui/core/Slider/Slider';

interface ISliderProps extends Partial<SliderTypeMap['props']> {
  label?: string;
}

export const Slider: FC<ISliderProps> = ({
  value,
  onChange,
  min,
  max,
  label,
  ...props
}) => {
  const [styleProps, restProps] = useStyleProperties(props);
  return (
    <Container {...styleProps}>
      {label && <SliderText>{label}</SliderText>}
      <Row>
        <StaticValue>{min}</StaticValue>
        <SliderContainer>
          <SliderUI
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            {...restProps}
          />
        </SliderContainer>
        <StaticValue>{max}</StaticValue>
      </Row>
    </Container>
  );
};
