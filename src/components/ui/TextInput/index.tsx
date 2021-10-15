import React from 'react';
import { OutlinedTextFieldProps } from '@material-ui/core/TextField/TextField';

import useStyleProperties from 'hooks/useStyleProperties';

import { Container, TextInputUI, RightIcon } from './styles';
import { InputAdornment } from '@material-ui/core';

// Type
export interface ITextInputProps
  extends Omit<OutlinedTextFieldProps, 'variant'> {
  variant?: 'filled' | 'standard';
  className?: string;
  endIcon?: { name: string; onClick: () => void };
  state?: 'valid' | 'invalid' | 'default';
}

export const TextInput: React.FC<ITextInputProps> = ({
  className,
  variant,
  endIcon,
  InputProps,
  ...props
}) => {
  const [stylesAttrs, otherProps] = useStyleProperties(props);

  const state = props.error ? 'invalid' : props.state || 'default';
  return (
    <Container className={className} {...stylesAttrs}>
      <TextInputUI
        state={state}
        variant={variant || 'outlined'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RightIcon {...endIcon} state={state} />
            </InputAdornment>
          ),
          ...InputProps,
        }}
        {...otherProps}
      />
    </Container>
  );
};
