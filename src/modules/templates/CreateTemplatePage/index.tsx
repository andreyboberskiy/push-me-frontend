import React, { memo, useCallback } from 'react';
import { Form } from 'react-final-form';

import { FormByTextQuery } from './components/FormByTextQuery';

import { Container, Content, Title } from './styles';

const initialValues = {
  url: '',
  title: '',
  parseTime: { s: 0, m: 0, h: 0, d: 0 },
  parentSelector: null,
  query1: {
    title: '',
    query: '',
    approved: false,
    selectorInfo: { parent: null, classList: null },
  },
};

const CreateTemplatePage = () => {
  const handleSubmit = useCallback(async (values) => {
    console.log({ values });
  }, []);

  return (
    <Container>
      <Content>
        <Title>Create new template</Title>
      </Content>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        render={FormByTextQuery}
      />
    </Container>
  );
};

export default memo(CreateTemplatePage);
