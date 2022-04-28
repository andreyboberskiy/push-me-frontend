import { Form } from 'react-final-form';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import authService from 'modules/auth/service';
import { setUserAction } from 'modules/auth/store/actions';
import routesByName from 'constants/routesByName';
import { errorToast } from 'libs/toast/functions';

import { validate } from './SignInForm/validation';

import {
  ContentContainer,
  LeftSide,
  WelcomeBackTitle,
  WelcomeBackSubtitle,
  FormContainer,
  RightBackground,
  SignInForm,
} from './styles';

export interface IFormValues {
  email: string;
  password: string;
}

const initialValues: IFormValues = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values) => {
      try {
        const { user } = await authService.logIn(values);
        dispatch(setUserAction(user));
        history.push(routesByName.dashboard.route);
      } catch (e) {
        errorToast(e.generalError);
        return { ...e.validationErrors };
      }
    },
    [dispatch, history]
  );

  return (
    <ContentContainer>
      <LeftSide>
        <WelcomeBackTitle>Welcome Back</WelcomeBackTitle>
        <WelcomeBackSubtitle>
          Enter your email and password to sign in
        </WelcomeBackSubtitle>
        <FormContainer>
          <Form
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validate={validate}
            render={SignInForm}
          />
        </FormContainer>
      </LeftSide>
      <RightBackground />
    </ContentContainer>
  );
};

export default SignInPage;
