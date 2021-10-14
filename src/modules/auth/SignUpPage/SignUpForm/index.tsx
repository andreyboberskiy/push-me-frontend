import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import {
  Container,
  TextInputField,
  SubmitButton,
  HaveAccountText,
  SignInPressedText,
  Row,
} from './styles';

export const SignUpForm: React.FC<FormRenderProps> = ({ handleSubmit }) => {
  return (
    <Container>
      <Field name="name" component={TextInputField} label="Name" />
      <Field name="surname" component={TextInputField} mt={6} label="Surname" />
      <Field name="email" component={TextInputField} mt={6} label="Email" />
      <Field
        name="password"
        component={TextInputField}
        type="password"
        mt={6}
        label="Password"
      />
      <Field
        name="confirmPassword"
        component={TextInputField}
        type="password"
        mt={6}
        label="Confirm password"
      />
      <SubmitButton size="md" mt={9} onClick={handleSubmit} fullWidth>
        Sign Up
      </SubmitButton>
      <Row mt={6}>
        <HaveAccountText>Already have an account?</HaveAccountText>
        <SignInPressedText>Sign In</SignInPressedText>
      </Row>
    </Container>
  );
};
