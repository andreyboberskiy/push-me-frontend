import { FormSpy } from 'react-final-form';
import React from 'react';

import { Button } from './styles';

import { IButtonProps } from 'components/ui/Button';

interface IProps extends IButtonProps {}

export const FormSubmitButton: React.FC<IProps> = ({ loading, ...props }) => {
  return (
    <FormSpy>
      {({ submitting, validating, dirtySinceLastSubmit, hasSubmitErrors }) => (
        <Button
          type="submit"
          disabled={
            validating ||
            submitting ||
            (hasSubmitErrors && !dirtySinceLastSubmit)
          }
          loading={validating || submitting || loading}
          {...props}
        >
          {props.children || 'Submit'}
        </Button>
      )}
    </FormSpy>
  );
};
