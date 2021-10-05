import React, { useState } from 'react';

import {
  Container,
  ContentContainer,
  FormContainer,
  SignUpForm,
  LoginForm,
  Tabs,
  TabBtn,
} from './styles';
import _useEffect from 'hooks/_useEffect';

// Interfaces
interface ISignPageProps {
  location: {
    state: {
      activeTab?: 'login' | 'signUp';
    };
  };
}

const SignPage: React.FC<ISignPageProps> = ({
  location: {
    state: { activeTab: activeTabFromProps },
  },
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(activeTabFromProps || 'login');

  _useEffect(() => {
    if (activeTab !== activeTabFromProps) {
      setActiveTab(activeTabFromProps);
    }
  }, [activeTabFromProps]);
  return (
    <Container as="section">
      <ContentContainer bg="darkBlue" withNavbar>
        <FormContainer>
          <Tabs>
            <TabBtn
              onClick={() => {
                setActiveTab('login');
              }}
            >
              Login
            </TabBtn>
            <TabBtn
              ml={10}
              onClick={() => {
                setActiveTab('signUp');
              }}
            >
              Sign Up
            </TabBtn>
          </Tabs>
          {activeTab === 'signUp' ? <SignUpForm /> : <LoginForm />}
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
export default SignPage;
