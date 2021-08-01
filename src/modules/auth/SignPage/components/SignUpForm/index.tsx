import React, { memo, useCallback } from 'react';
import { Field, Form, FormRenderProps } from 'react-final-form';

import authService from 'modules/auth/service';

import { FormWrapper, Container, SubmitButton, TextInputField } from './styles';

const FormRender: React.FC<FormRenderProps> = ({ handleSubmit }) => {
  return (
    <FormWrapper>
      <Field name="name" component={TextInputField} placeholder="Name" />
      <Field name="surname" component={TextInputField} placeholder="Surname" />
      <Field name="email" component={TextInputField} placeholder="Email" />
      <Field
        name="password"
        component={TextInputField}
        placeholder="Password"
      />

      <Field
        mt={5}
        name="confirmPassword"
        component={TextInputField}
        placeholder="Confirm password"
      />

      <SubmitButton onClick={handleSubmit}>Confirm</SubmitButton>
    </FormWrapper>
  );
};

export const SignUpForm = memo(() => {
  const handleSubmit = useCallback(async (values) => {
    await authService.signUp(values);
  }, []);

  return (
    <Container>
      <Form render={FormRender} onSubmit={handleSubmit} />
    </Container>
  );
});
