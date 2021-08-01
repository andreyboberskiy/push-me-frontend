import React, { useMemo } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { TextInput } from 'components/ui';

interface IProps extends FieldRenderProps<string, HTMLElement> {
  variant?: 'filled' | 'standard';
  placeholder?: string;
}

export const TextInputField: React.FC<IProps> = ({
  input: { value, onChange },
  meta,
  variant,
  placeholder,
  ...props
}) => {
  const hasError = useMemo(() => meta.visited && meta.error, [meta]);
  return (
    <TextInput
      value={value}
      onChange={onChange}
      error={hasError}
      variant={variant || 'outlined'}
      helperText={meta.error}
      label={placeholder}
      {...props}
    />
  );
};
