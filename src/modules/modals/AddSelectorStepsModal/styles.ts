import styled from 'styled-components';

import { Box, Button, Text, TextInput } from 'components/ui';

export { RowBetween, RowAround, Column, ColumnHalf } from 'components/common';
export { Modal } from 'components/ui';

export const StepContent = styled(Box).attrs({ mt: 3 })`
  min-height: 80%;
`;
export const SubmitButton = styled(Button).attrs({ mt: 4, size: 'sm' })``;
export const ApproveTitle = styled(Text).attrs({ color: 'black' })``;
export const SameText = styled(ApproveTitle).attrs<any>((props) => ({
  color: props.same ? 'green' : 'black',
}))`
  ${(props) => props.same && 'font-family: T600;'}
  text-align: left;
`;
export const Title = styled(ApproveTitle).attrs({
  fontSize: 5,
})`
  font-family: Main;
`;
export const SmallTitle = styled(ApproveTitle).attrs({
  fontSize: 4,
  mb: 3,
})`
  font-family: Main;
`;

export const ListWrapper = styled(Box)`
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TitleInput = styled(TextInput)``;
export const TitleContainer = styled(Box).attrs({ pt: 4 })`
  flex-grow: 1;
`;
