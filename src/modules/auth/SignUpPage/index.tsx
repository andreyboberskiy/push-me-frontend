import { useCallback } from 'react';
import { Form } from 'react-final-form';

import { errorToast, successToast } from 'libs/toast/functions';
import authService from '../service';
import { validate } from './SignUpForm/validation';

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
import { FormApi } from 'final-form';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpPage = () => {
  const handleSubmit = useCallback(async (values, form: FormApi) => {
    try {
      await authService.signUp(values);
      successToast('Account have been created! Please, sign in.');
    } catch (e) {
      errorToast(e.generalError);
      return { ...e.validationErrors };
    }
  }, []);
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
