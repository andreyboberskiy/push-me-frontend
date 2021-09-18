import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { ParseTimePicker } from 'components/ui';

// Interface
import { IParseTimeValue } from 'components/ui/ParseTimePicker';

export const ParseTimePickerField: React.FC<
  FieldRenderProps<IParseTimeValue, HTMLElement>
> = ({ input: { onChange, value }, ...props }) => {
  return <ParseTimePicker onChange={onChange} value={value} {...props} />;
};
