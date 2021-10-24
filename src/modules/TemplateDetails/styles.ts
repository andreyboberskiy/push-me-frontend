import styled from 'styled-components';

import noImagePlaceholder from 'assets/images/common/no-image-placeholder.png';

import { Avatar, Box, Card, Image, Text } from 'components/ui';

export { Row, Column } from 'components/common';
export { StatusCircle, Switcher } from 'components/ui';

export const Container = styled(Box)``;
export const MainInfoContainer = styled(Card)`
  display: flex;
`;
export const StatsCard = styled(Box)``;

export const TemplateAvatar = styled(Avatar).attrs({
  src: noImagePlaceholder,
  withChange: true,
})`
  width: 100px;
  height: 100px;

  border-radius: 50%;

  cursor: pointer;
`;

export const InfoLabel = styled(Text).attrs({ fontSize: 3, color: 'gray700' })`
  min-width: 200px;
  font-weight: bold;
  text-align: left;
  line-height: 24px;
`;
export const InfoValue = styled(InfoLabel).attrs({
  color: 'gray600',
})``;

export const SwitcherContainer = styled(Box).attrs({
  mt: 5,
  py: 2,
  px: 3,
  bg: 'cyan400',
  boxShadow: 1,
})`
  border-radius: 15px;

  display: flex;
  align-items: center;
`;

export const SwitcherLabel = styled(Text).attrs({
  fontSize: 3,
  color: 'white',
  mr: 2,
})`
  font-weight: bold;
`;
