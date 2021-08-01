import styled from 'styled-components';

import { Box, Image, Button, Text, ContentContainer } from 'components/ui';

// @ts-ignore
import secondaryLogo from 'assets/images/common/secondaryLogo.png';

export const Container = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: inherit;
`;
export const HeaderContainer = styled(Box).attrs({
  bg: 'darkBlue',
})`
  min-height: 100vh;
`;

export const HeaderMainArea = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 30vh;
`;

export const SecondaryLogo = styled(Image).attrs({
  src: secondaryLogo,
})`
  max-width: 400px;
  margin: 0 auto;
`;

export const HeaderTitle = styled(Text).attrs({
  fontSize: 9,
  mt: 4,
})`
  font-family: T600;
`;

export const HeaderText = styled(Text).attrs({
  fontSize: 6,
  mt: 2,
  opacity: 0.8,
})``;

export const HowItWorksButton = styled(Button).attrs({
  variant: 'default',
  fontFamily: 'Main',
  fontSize: 6,
  mb: 4,
})`
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  text-transform: uppercase;
`;
