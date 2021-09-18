import EditIconUI from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box } from 'components/ui/Box';
import { Modal as ModalUI } from 'components/ui/Modal';
import { Text } from 'components/ui/Text';

export { TextInput } from 'components/ui/TextInput';
export { Slider } from 'components/ui/Slider';

export const Container = styled(Box)`
  position: relative;
`;
export const ModalContainer = styled(Box)``;

export const SliderContainer = styled(Box).attrs({ mt: 4 })``;

export const EditIcon = styled(EditIconUI).attrs<any>({ color: 'darkBlue' })`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 10px;
  cursor: pointer;
  ${color}
`;

export const Modal = styled(ModalUI).attrs({ size: 'sm' })`
  height: auto;
  min-height: 200px;
`;

export const ModalTitle = styled(Text)``;
export const SliderText = styled(Text)``;
