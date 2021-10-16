import React, { memo, useCallback } from 'react';
import { Field, Form, FormRenderProps } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import authService from 'modules/auth/service';

import { setUserAction } from 'modules/auth/store/actions';

import routesByName from 'constants/routesByName';

import { FormWrapper, Container, SubmitButton, TextInputField } from './styles';

const FormRender: React.FC<FormRenderProps> = ({ handleSubmit }) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Field name="email" component={TextInputField} label="Email" />
        <Field name="password" component={TextInputField} label="Password" />
        <SubmitButton>Confirm</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export const LoginForm = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values) => {
      try {
        const { accessToken, refreshToken, user } = await authService.logIn(
          values
        );
        dispatch(setUserAction(user));
        authService.setAccessToken(accessToken);
        authService.setRefreshToken(refreshToken);
      } catch (e) {
        return e;
      }
    },
    [dispatch, history]
  );

  return (
    <Container>
      <Form render={FormRender} onSubmit={handleSubmit} />
    </Container>
  );
});
