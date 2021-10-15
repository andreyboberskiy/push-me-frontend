import React, { useMemo } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { TextInput } from 'components/ui';

import FormFieldWrapper from '../FormFieldWrapper';

interface IProps extends FieldRenderProps<string, HTMLElement> {}

export const TextInputField: React.FC<IProps> = (props) => {
  return <FormFieldWrapper {...props} component={TextInput} />;
};
