import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import {
  Container,
  TextInputField,
  PasswordField,
  SubmitButton,
  HaveAccountText,
  SignInPressedText,
  Row,
} from './styles';
import useFlagManager from 'hooks/useFlagManager';

export const SignUpForm: React.FC<FormRenderProps> = ({ handleSubmit }) => {
  const showPass = useFlagManager(false);
  return (
    <Container>
      <form noValidate onSubmit={handleSubmit}>
        <Field name="name" component={TextInputField} label="Name" />
        <Field
          name="surname"
          component={TextInputField}
          mt={6}
          label="Surname"
        />
        <Field name="email" component={TextInputField} mt={6} label="Email" />
        <Field
          name="password"
          component={PasswordField}
          mt={6}
          label="Password"
          passwordShowed={showPass.state}
          toggleShowPass={showPass.toggle}
        />
        <Field
          name="confirmPassword"
          component={PasswordField}
          mt={6}
          label="Confirm password"
          passwordShowed={showPass.state}
          toggleShowPass={showPass.toggle}
        />
        <SubmitButton size="md" mt={9} onClick={handleSubmit} fullWidth>
          Sign Up
        </SubmitButton>
        <Row mt={6}>
          <HaveAccountText>Already have an account?</HaveAccountText>
          <SignInPressedText>Sign In</SignInPressedText>
        </Row>
      </form>
    </Container>
  );
};
