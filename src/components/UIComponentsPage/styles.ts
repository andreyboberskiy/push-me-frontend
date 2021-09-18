import styled from 'styled-components';

import {
  Box,
  Text as TextUI,
  Button as ButtonUI,
  TextInput as TextInputUI,
} from 'components/ui';

export const Button = styled(ButtonUI).attrs({ mt: 3, ml: 4 })``;
export const Container = styled(Box).attrs({ py: 100, px: 6 })`
  min-height: 100vh;
`;

export const Section = styled(Box).attrs({ mt: 5 })``;

export const Header = styled(TextUI).attrs({ fontSize: 5, color: 'black' })`
  text-align: left;
`;

export const ComponentsContainer = styled(Box).attrs({ mt: 3 })``;

export const Row = styled(Box)`
  align-items: center;
  display: flex;
`;

export const Text = styled(TextUI)`
  text-align: left;
`;
export const TextInput = styled(TextInputUI).attrs({ mt: 3 })`
  width: 1000px;
`;
