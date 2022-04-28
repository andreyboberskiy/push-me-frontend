import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';

import useFlagManager from 'hooks/useFlagManager';

import {
  Container,
  TextInputField,
  Label,
  FormSubmitButton,
  ChangeButton,
  FormContainer,
} from './styles';

// ts

interface IProps {
  value: any;
  onChange: (any) => void;
  name: string;
  labelStyles?: any;
  inputProps?: any;
}

export const ChangeField: React.FC<IProps> = ({
  value,
  onChange,
  name,
  labelStyles,
  inputProps,
}) => {
  const showChangeForm = useFlagManager(false);
  const onSubmit = useCallback(
    async (values) => {
      await onChange(values[name]);
      showChangeForm.turnOff();
    },
    [onChange, showChangeForm, name]
  );
  return (
    <Container>
      {showChangeForm.state ? (
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <Field name={name} component={TextInputField} {...inputProps} />
                <FormSubmitButton>Submit</FormSubmitButton>
              </FormContainer>
            </form>
          )}
        </Form>
      ) : (
        <>
          <Label {...labelStyles}>{value}</Label>
          <ChangeButton onClick={showChangeForm.turnIn}>Change</ChangeButton>
        </>
      )}
    </Container>
  );
};
