import React, { useMemo } from 'react';
import { FieldRenderProps } from 'react-final-form';

export interface IFinalFormInputWrapperProps extends FieldRenderProps<any> {}

const FinalFormInputWrapper: React.FC<IFinalFormInputWrapperProps> = ({
  component: Component,
  helperText: helperTextProp,
  input,
  meta: { submitError, dirtySinceLastSubmit, touched, error, submitting },
  ...rest
}) => {
  const hasError =
    Boolean((submitError && !dirtySinceLastSubmit) || error) &&
    touched &&
    !submitting;

  const helperText = useMemo(() => {
    if (!hasError) return helperTextProp;

    return error || submitError;
  }, [hasError, error, submitError, helperTextProp]);

  return (
    <Component helperText={helperText} error={hasError} {...input} {...rest} />
  );
};

export default FinalFormInputWrapper;
