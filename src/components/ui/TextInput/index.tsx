import React from 'react';
import { OutlinedTextFieldProps } from '@material-ui/core/TextField/TextField';
import { InputAdornment } from '@material-ui/core';

import useStyleProperties from 'hooks/useStyleProperties';

import { Container, TextInputUI, Icon } from './styles';

// Type
export interface ITextInputProps
  extends Omit<OutlinedTextFieldProps, 'variant'> {
  variant?: 'filled' | 'standard';
  className?: string;
  endIcon?: { name: string; onClick: () => void };
  startIcon?: { name: string; onClick: () => void };
  state?: 'valid' | 'invalid' | 'default';
  layoutBg?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  className,
  variant,
  endIcon,
  startIcon,
  InputProps,
  layoutBg = 'white',
  ...props
}) => {
  const [stylesAttrs, otherProps] = useStyleProperties(props);
  const state = props.error ? 'invalid' : props.state || 'default';
  return (
    <Container className={className} {...stylesAttrs}>
      <TextInputUI
        state={state}
        variant={variant || 'outlined'}
        layoutBg={layoutBg}
        InputProps={{
          endAdornment: endIcon ? (
            <InputAdornment position="end">
              <Icon {...endIcon} state={state} />
            </InputAdornment>
          ) : undefined,
          startAdornment: startIcon ? (
            <InputAdornment position="start">
              <Icon {...startIcon} state={state} />
            </InputAdornment>
          ) : undefined,
          ...InputProps,
        }}
        label=" "
        {...otherProps}
      />
    </Container>
  );
};
