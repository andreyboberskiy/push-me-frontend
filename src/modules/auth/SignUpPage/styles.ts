import styled from 'styled-components';

import greenBg from 'assets/images/sign-up/top-banner.png';

import { Box, Image, Text } from 'components/ui';
import { UnAuthContentContainer as ContentContainerUI } from 'components/common';

export { SignUpForm } from './SignUpForm';

export const ContentContainer = styled(ContentContainerUI).attrs({
  pt: 24,
  pb: 32,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Background = styled(Box).attrs({
  px: 6,
  py: 4,
})`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const TopBanner = styled(Image).attrs({
  src: greenBg,
})`
  height: 50vh;
  width: 100%;

  border-radius: 15px;
`;

export const BottomBanner = styled(Box)`
  min-height: 40vh;
`;

export const Column = styled(Box)`
  max-width: 450px;
  width: 100%;
`;

export const FormContainer = styled(Box).attrs({
  bg: 'white',
  py: 10,
  px: 12,
  mt: 16,
})`
  border-radius: 15px;

  box-shadow: 0 7px 23px rgba(0, 0, 0, 0.05);
`;

export const WelcomeTitle = styled(Text).attrs({
  fontSize: 36,
  color: 'white',
})`
  line-height: 54px;
  font-weight: 700;
`;
export const WelcomeText = styled(Text).attrs({
  color: 'white',
  fontSize: 16,
  mt: 3,
})`
  text-align: center;
  line-height: 24px;
  letter-spacing: 1.1px;
`;
