import React, { memo, useCallback } from 'react';
import { Field, Form, FormRenderProps } from 'react-final-form';

import authService from 'modules/auth/service';

import { FormWrapper, Container, SubmitButton, TextInputField } from './styles';

const FormRender: React.FC<FormRenderProps> = ({ handleSubmit }) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Field name="name" component={TextInputField} label="Name" />
        <Field name="surname" component={TextInputField} label="Surname" />
        <Field name="email" component={TextInputField} label="Email" />
        <Field name="password" component={TextInputField} label="Password" />
        <Field
          name="confirmPassword"
          component={TextInputField}
          label="Confirm password"
        />
      </form>

      <SubmitButton>Confirm</SubmitButton>
    </FormWrapper>
  );
};

export const SignUpForm = memo(() => {
  const handleSubmit = useCallback(async (values) => {
    try {
      await authService.signUp(values);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }, []);

  return (
    <Container>
      <Form render={FormRender} onSubmit={handleSubmit} />
    </Container>
  );
});
