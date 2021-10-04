import styled from 'styled-components';

import defaultImage from 'assets/images/common/roundedLogo.png';

import {
  Box,
  Image as ImageUI,
  Text,
  Switcher as SwitcherUI,
} from 'components/ui';

export { Column, Row } from 'components/common';

export const Container = styled(Box).attrs({ mt: 70 })`
  display: flex;
  flex-direction: row;
`;

export const Image = styled(ImageUI).attrs((props) => ({
  src: props.src ?? defaultImage,
}))`
  max-width: 200px;
`;

export const Value = styled(Text).attrs({
  fontSize: 3,
  fontFamily: 0,
  mb: 3,
})`
  text-align: left;
`;
export const Label = styled(Text).attrs({
  fontSize: 4,
  fontFamily: 0,
  mb: 3,
  mr: 100,
})`
  text-align: left;
  min-width: 20%;
  font-weight: 600;
`;

export const InfoContainer = styled(Box).attrs({
  bg: 'grey',
  ml: 100,
  p: 8,
  boxShadow: 1,
})`
  width: 100%;
  border-radius: 30px;
`;

export const Switcher = styled(SwitcherUI)``;
