import { FormSpy } from 'react-final-form';
import React from 'react';

import { Button } from './styles';

import { IButtonProps } from 'components/ui/Button';

interface IProps extends IButtonProps {}

export const FormSubmitButton: React.FC<IProps> = ({ loading, ...props }) => {
  return (
    <FormSpy>
      {({ submitting, validating }) => (
        <Button
          type="submit"
          disabled={validating || submitting}
          loading={validating || submitting || loading}
          {...props}
        >
          {props.children || 'Submit'}
        </Button>
      )}
    </FormSpy>
  );
};
