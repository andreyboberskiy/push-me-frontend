import styled from 'styled-components';

import { Box, Image, Text } from 'components/ui';
import { ContentContainer } from 'components/common';

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
  fontFamily: 2,
  color: 'white',
})`
  font-weight: 600;
`;

export const HeaderText = styled(Text).attrs({
  fontSize: 6,
  mt: 2,
  opacity: 0.8,
  color: 'white',
})``;

export const HowItWorksButton = styled(Text).attrs({
  fontFamily: 1,
  fontSize: 6,
  mb: 4,
  color: 'white',
})`
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
`;
