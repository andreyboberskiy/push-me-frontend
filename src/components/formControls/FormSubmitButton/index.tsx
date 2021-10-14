import { FormSpy } from 'react-final-form';
import React from 'react';

import { Button } from './styles';

import { IButtonProps } from 'components/ui/Button';

interface IProps extends IButtonProps {}

export const FormSubmitButton: React.FC<IProps> = (props) => {
  return (
    <FormSpy>
      {({ valid, submitting }) => (
        <Button type="submit" disabled={!valid || submitting} {...props}>
          {props.children || 'Submit'}
        </Button>
      )}
    </FormSpy>
  );
};
