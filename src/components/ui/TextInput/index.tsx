import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

import { Container, TextInputUI } from './styles';

// Interface

export const TextInput: React.FC<TextFieldProps> = ({
  className,
  ...props
}) => (
  <Container className={className}>
    <TextInputUI {...props} />
  </Container>
);
