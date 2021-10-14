import styled from 'styled-components';

import { Box, Button } from 'components/ui';

export { ContentContainer } from 'components/common';
export { LoginForm } from './components/LoginForm';
export { SignUpForm } from './components/SignUpForm';

export const Container = styled(Box).attrs({ bg: 'darkBlue' })`
  min-height: 100vh;
`;

export const FormContainer = styled(Box).attrs({
  bg: 'grey2',
  p: 4,
  mt: 8,
  boxShadow: 1,
})`
  border-radius: 12px;
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  align-self: center;
`;

export const Tabs = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 24px;
  max-width: 500px;
  width: 100%;
`;

export const TabBtn = styled<any>(Button).attrs({
  variant: 'lightFilled',
  size: 'sm',
})`
  width: 48%;
`;
