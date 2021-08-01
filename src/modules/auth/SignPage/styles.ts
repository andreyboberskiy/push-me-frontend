import styled from 'styled-components';

import { Box, Button } from 'components/ui';

export { ContentContainer } from 'components/ui';
export { LoginForm } from './components/LoginForm';
export { SignUpForm } from './components/SignUpForm';

export const Container = styled(Box).attrs({ bg: 'darkBlue' })`
  min-height: 100vh;
`;

export const FormContainer = styled(Box).attrs({ bg: 'white', p: 4 })`
  border-radius: 12px;
  max-width: 1000px;
  margin: 150px auto 0;
  width: 100%;
`;

export const Tabs = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const TabBtn = styled<any>(Button).attrs({
  variant: 'primary',
  size: 'sm',
})``;
