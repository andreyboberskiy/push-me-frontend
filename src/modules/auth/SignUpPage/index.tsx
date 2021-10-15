import { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';

import { errorToast, successToast } from 'libs/toast/functions';

import authService from '../service';
import { validate } from './SignUpForm/validation';

import routesByName from 'constants/routesByName';

import {
  ContentContainer,
  Background,
  TopBanner,
  BottomBanner,
  Column,
  WelcomeTitle,
  WelcomeText,
  FormContainer,
  SignUpForm,
} from './styles';

// Interface
import { FormApi } from 'final-form';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpPage = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (values, form: FormApi) => {
      try {
        await authService.signUp(values);
        successToast('Account have been created! Please, sign in.');
        history.push(routesByName.signIn);
      } catch (e) {
        errorToast(e.generalError);
        return { ...e.validationErrors };
      }
    },
    [history]
  );
  return (
    <ContentContainer>
      <Background>
        <TopBanner />
        <BottomBanner />
      </Background>
      <Column>
        <WelcomeTitle>Welcome!</WelcomeTitle>
        <WelcomeText>
          Sign up for getting notifications about everything in Network!
        </WelcomeText>

        <FormContainer>
          <Form
            initialValues={initialValues}
            render={SignUpForm}
            onSubmit={handleSubmit}
            validate={validate}
          />
        </FormContainer>
      </Column>
    </ContentContainer>
  );
};

export default SignUpPage;
