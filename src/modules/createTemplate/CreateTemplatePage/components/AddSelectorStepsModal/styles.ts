import styled from 'styled-components';

import { Box, Button, Text, TextInput } from 'components/ui';
import { Column as ColumnUI } from 'components/common';

export { RowCenter, RowAround, ColumnHalf } from 'components/common';
export { Modal, ExcludeText } from 'components/ui';

export const Column = styled(ColumnUI)`
  max-height: 100%;
`;

export const Container = styled(Box)`
  max-height: 100%;
`;

export const StepContent = styled(Box).attrs({ mt: 3 })`
  max-height: 100%;
`;
export const SubmitButton = styled(Button).attrs({
  mt: 4,
  size: 'sm',
  variant: 'lightFilled',
  px: 13,
})`
  margin: 32px auto 0;
`;
export const ApproveTitle = styled(Text).attrs({
  color: 'black',
  fontFamily: 0,
})``;

export const Title = styled(Text).attrs({
  fontSize: 6,
  fontFamily: 1,
  mb: 8,
})`
  font-weight: 700;
`;
export const SmallTitle = styled(Text).attrs({
  fontSize: 4,
  fontFamily: 0,
})``;
export const SameText = styled(Text).attrs<any>((props) => ({
  color: props.same ? 'green' : 'black',
  fontFamily: 0,
  mt: props.mt ?? 3,
  fontSize: 3,
}))`
  ${(props) => props.same && 'font-weight: 700;'}
  text-align: left;
`;
export const ListWrapper = styled(Box)`
  max-height: 32vh;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TitleInput = styled(TextInput)``;
export const TitleContainer = styled(Box).attrs({ pt: 4 })`
  flex-grow: 1;
`;
