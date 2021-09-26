import styled from 'styled-components';

import { Box } from 'components/ui/Box';
import { Text } from 'components/ui/Text';
import { Row } from 'components/common';
import { Button } from 'components/ui/Button';

export const Container = styled(Row)``;

export const Status = styled<any>(Box).attrs<any>((props) => ({
  bg: props.excluded ? 'red' : 'green',
  mr: 3,
}))`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const TextValue = styled(Text).attrs<any>((props) => ({
  color: props.same ? 'green' : 'black',
  fontFamily: 0,
  fontSize: 3,
}))`
  ${(props) => props.same && 'font-weight: 700;'}
  ${(props) => props.excluded && 'text-decoration: line-through;'}
  text-align: left;
  max-width: 80%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ExcludeButton = styled(Button).attrs({
  variant: 'lightFilled',
  size: 'xs',
})``;
