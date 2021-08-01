import React, { useEffect, useState } from 'react';

import {
  Container,
  ContentContainer,
  FormContainer,
  SignUpForm,
  LoginForm,
  Tabs,
  TabBtn,
} from './styles';

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

  useEffect(() => {
    if (activeTab !== activeTabFromProps) {
      setActiveTab(activeTabFromProps);
    }
  }, [activeTabFromProps]);
  return (
    <Container as="section">
      <ContentContainer>
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
              ml={5}
              onClick={() => {
                setActiveTab('signUp');
              }}
            >
              SignUp
            </TabBtn>
          </Tabs>
          {activeTab === 'signUp' ? <SignUpForm /> : <LoginForm />}
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
export default SignPage;
