import { FC } from 'react';

import SliderUI from '@material-ui/core/Slider';

import { Container } from './styles';
import useOtherStyleProperties from 'hooks/useOtherStyleProperties';

// Interface
import { SliderTypeMap } from '@material-ui/core/Slider/Slider';

interface ISliderProps extends Partial<SliderTypeMap['props']> {}

export const Slider: FC<ISliderProps> = ({ value, onChange, ...props }) => {
  const [styleProps, restProps] = useOtherStyleProperties(props);
  return (
    <Container {...styleProps}>
      <SliderUI value={value} onChange={onChange} {...restProps} />
    </Container>
  );
};
