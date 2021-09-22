import React from 'react';
import { OutlinedTextFieldProps } from '@material-ui/core/TextField/TextField';

import useStyleProperties from 'hooks/useStyleProperties';

import { Container, TextInputUI } from './styles';

// Type
export interface ITextInputProps
  extends Omit<OutlinedTextFieldProps, 'variant'> {
  variant?: 'filled' | 'standard';
  className?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  className,
  variant,
  ...props
}) => {
  const [stylesAttrs, otherProps] = useStyleProperties(props);
  return (
    <Container className={className} {...stylesAttrs}>
      <TextInputUI {...otherProps} variant={variant || 'outlined'} />
    </Container>
  );
};
