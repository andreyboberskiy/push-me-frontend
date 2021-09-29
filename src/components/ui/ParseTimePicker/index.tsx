import React, { useCallback, useMemo, useState } from 'react';
import map from 'lodash/map';

import useFlagManager from 'hooks/useFlagManager';
import useStyleProperties from 'hooks/useStyleProperties';

import { parseTimeToText } from 'utils/parseTime';

import {
  Container,
  TextInput,
  Modal,
  ModalContainer,
  EditIcon,
  Slider,
  ModalTitle,
  SliderContainer,
} from './styles';

// Interface
import { ITextInputProps } from 'components/ui/TextInput';

export interface IParseTimeValue {
  // [0, 59], [0, 59], [0, 23], [1, 31], [0, 11], [0, 6];
  s: number;
  m: number;
  h: number;
  d: number;
}
interface IParseTimePickerProps extends Omit<ITextInputProps, 'onChange'> {
  onChange: (value: IParseTimeValue) => void;
  value: IParseTimeValue;
}

const getSliderMaxValue = (dateKey: string): number => {
  switch (dateKey) {
    case 's':
      return 59;
    case 'm':
      return 59;
    case 'h':
      return 24;
    case 'd':
      return 30;
    default:
      return 59;
  }
};

const getNameByDateKey = (dateKey: string): string => {
  switch (dateKey) {
    case 's':
      return 'Seconds';
    case 'm':
      return 'Minutes';
    case 'h':
      return 'Hours';
    case 'd':
      return 'Days';
    default:
      return '';
  }
};

export const ParseTimePicker: React.FC<IParseTimePickerProps> = ({
  onChange,
  value,
  ...props
}) => {
  const modalController = useFlagManager(false);

  const [localValues, setLocalValues] = useState(value);

  const [styleProps, otherProps] = useStyleProperties(props);

  const textValue = useMemo(() => {
    return parseTimeToText(value);
  }, [value]);

  const handleChangeLocal = useCallback(
    (sliderValue: number | number[], key: string) => {
      setLocalValues({ ...value, [key]: sliderValue });
    },
    [value]
  );
  const handleChange = useCallback(
    (sliderValue: number | number[], key: string) => {
      onChange({ ...value, [key]: sliderValue });
    },
    [onChange, value]
  );

  return (
    <>
      <Container {...styleProps}>
        <TextInput
          {...otherProps}
          value={textValue}
          onClick={modalController.turnIn}
        />
        <EditIcon onClick={modalController.turnIn} />
      </Container>
      <Modal isOpen={modalController.state} onClose={modalController.turnOff}>
        <ModalContainer>
          <ModalTitle>Choose how often wa should check updates</ModalTitle>

          {map(['s', 'm', 'h', 'd'], (dateKey) => (
            <SliderContainer>
              <Slider
                value={localValues[dateKey]}
                min={0}
                max={getSliderMaxValue(dateKey)}
                valueLabelDisplay="on"
                label={`Enter ${getNameByDateKey(dateKey)}`}
                onChange={(_, val: number) => handleChangeLocal(val, dateKey)}
                onChangeCommitted={(_, valCom) => handleChange(valCom, dateKey)}
              />
            </SliderContainer>
          ))}
        </ModalContainer>
      </Modal>
    </>
  );
};
