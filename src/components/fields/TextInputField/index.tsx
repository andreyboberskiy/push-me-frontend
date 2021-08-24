import React, { useMemo } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { TextInput } from 'components/ui';

interface IProps extends FieldRenderProps<string, HTMLElement> {
  placeholder?: string;
}

export const TextInputField: React.FC<IProps> = ({
  input: { value, onChange },
  meta,
  placeholder,
  ...props
}) => {
  const hasError = useMemo(() => meta.visited && meta.error, [meta]);
  return (
    <TextInput
      value={value}
      onChange={onChange}
      error={hasError}
      helperText={meta.error}
      label={placeholder}
      {...props}
    />
  );
};
