import styled from 'styled-components';

import bgImage from 'assets/images/sign-in/bg.png';

import { UnAuthContentContainer as ContentContainerUI } from 'components/common';
import { Box, Image, Text } from 'components/ui';

export { SignInForm } from './SignInForm';

export const ContentContainer = styled(ContentContainerUI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const LeftSide = styled(Box)`
  max-width: 350px;
  width: 100%;
  margin: 0 auto 0 0;
`;

export const WelcomeBackTitle = styled(Text).attrs({
  fontSize: 32,
  color: 'teal300',
})`
  text-align: left;
  line-height: 42px;
  font-weight: 700;
`;

export const WelcomeBackSubtitle = styled(Text).attrs({
  fontSize: 4,
  color: 'gray400',
  mt: 2,
})`
  text-align: left;
  line-height: 20px;
  font-weight: 700;
`;

export const FormContainer = styled(Box).attrs({
  mt: 9,
})``;

export const RightBackground = styled(Image).attrs({
  src: bgImage,
})`
  position: fixed;
  right: 0;
  top: 0;
`;
