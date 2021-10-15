import React, { useCallback } from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import { useHistory } from 'react-router-dom';

import useFlagManager from 'hooks/useFlagManager';
import routesByName from 'constants/routesByName';
import {
  SubmitButton,
  Row,
  GrayText,
  GreenText,
  TextInputField,
  PasswordField,
} from './styles';

export const SignInForm: React.FC<FormRenderProps> = ({ handleSubmit }) => {
  const showPass = useFlagManager(false);
  const history = useHistory();

  const openSignUp = useCallback(() => {
    history.push(routesByName.signUp);
  }, [history]);
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Field name="email" component={TextInputField} label="Email" />
      <Field
        name="password"
        component={PasswordField}
        mt={6}
        label="Password"
        passwordShowed={showPass.state}
        toggleShowPass={showPass.toggle}
      />
      <SubmitButton mt={9} fullWidth>
        Sign in
      </SubmitButton>
      <Row mt={9}>
        <GrayText>Don&apos;t have an account?</GrayText>
        <GreenText onClick={openSignUp}>Sign up</GreenText>
      </Row>
    </form>
  );
};
