import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

import { Container, TextInputUI } from './styles';

// Type
type ITextInputProps = TextFieldProps & {
  variant?: 'filled' | 'standard';
  className?: string;
};

export const TextInput: React.FC<ITextInputProps> = ({
  className,
  variant,
  ...props
}) => (
  <Container className={className}>
    <TextInputUI {...props} variant={variant || 'outlined'} />
  </Container>
);
