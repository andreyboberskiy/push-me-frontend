import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListAction } from 'modules/templates/store/actions';
import map from 'lodash/map';

import {
  Container,
  Content,
  Title,
  TemplatesContainer,
  Template,
} from './styles';

const TemplatesPage = () => {
  const dispatch = useDispatch();
  const templateList = [];

  useEffect(() => {
    dispatch(getListAction());
  }, []);
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
