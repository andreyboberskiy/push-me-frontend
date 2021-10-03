import EditIconUI from '@material-ui/icons/Edit';
import styled from 'styled-components';

import theme from 'styles/theme';

import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';
import { TextInput as TextInputUI } from 'components/ui/TextInput';
import { Modal as ModalUI } from 'components/ui/Modal';

export { Slider } from 'components/ui/Slider';

export const TextInput = styled(TextInputUI)`
  pointer-events: none;
`;
export const Container = styled(Box)`
  cursor: pointer;
  position: relative;
`;
export const ModalContainer = styled(Box).attrs({ pb: 5 })``;

export const SliderContainer = styled(Box).attrs({ mt: 4 })``;

export const EditIcon = styled(EditIconUI).attrs({
  htmlColor: theme.colors.darkBlue,
})`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 10px;
  cursor: pointer;
`;

export const Modal = styled(ModalUI).attrs({ size: 'sm' })`
  height: auto;
  min-height: 200px;
`;

export const ModalTitle = styled(Text).attrs({ pb: 8, fontSize: 4 })``;
