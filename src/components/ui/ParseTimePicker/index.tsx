import React, { useMemo } from 'react';
import map from 'lodash/map';

import useFlagManager from 'hooks/useFlagManager';

import useOtherStyleProperties from 'hooks/useOtherStyleProperties';

import {
  Container,
  TextInput,
  Modal,
  ModalContainer,
  EditIcon,
  Slider,
  ModalTitle,
  SliderContainer,
  SliderText,
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
interface IParseTimePickerProps extends ITextInputProps {
  value: IParseTimeValue;
}

const parseTimeToText = (time: IParseTimeValue) => {
  let text = '';

  if (time.s) {
    text += `Seconds: ${time.s}; `;
  }
  if (time.m) {
    text += `Minutes: ${time.m}; `;
  }
  if (time.h) {
    text += `Hours: ${time.h}; `;
  }
  if (time.d) {
    text += `Days: ${time.d}; `;
  }

  return text;
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

  const [styleProps, otherProps] = useOtherStyleProperties(props);

  const textValue = useMemo(() => {
    return parseTimeToText({ s: 15, m: 20, h: 0, d: 0 });
  }, [value]);

  return (
    <>
      <Container {...styleProps}>
        <TextInput {...otherProps} value={textValue} onClick={() => {}} />
        <EditIcon onClick={modalController.turnIn} />
      </Container>
      <Modal isOpen={modalController.state} onClose={modalController.turnOff}>
        <ModalContainer>
          <ModalTitle>Choose how often wa should check updates</ModalTitle>

          {map(['s', 'm', 'h', 'd'], (dateKey) => (
            <SliderContainer>
              <SliderText>Enter {getNameByDateKey(dateKey)}</SliderText>
              <Slider value={value[dateKey]} />
            </SliderContainer>
          ))}
        </ModalContainer>
      </Modal>
    </>
  );
};
