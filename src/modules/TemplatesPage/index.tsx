import React from 'react';

import map from 'lodash/map';

import {
  Container,
  Content,
  Title,
  TemplatesContainer,
  Template,
} from './styles';

const TemplatesPage = () => {
  const templateList = [];
  return (
    <Container>
      <Content>
        <Title>My templates</Title>
        <TemplatesContainer>
          {map(templateList, (item) => (
            <Template template={item} />
          ))}
        </TemplatesContainer>
      </Content>
    </Container>
  );
};

export default TemplatesPage;
