import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import map from 'lodash/map';

import { getListAction } from 'modules/myTemplates/store/actions';

import { IReducerStore } from 'store/reducers';
import { ITemplate } from 'types/templates';

import {
  Container,
  Content,
  Title,
  TemplatesContainer,
  Template,
} from './styles';

const MyTemplatesPage = () => {
  const dispatch = useDispatch();
  const templateList = useSelector<IReducerStore, ITemplate[]>(
    (state) => state.templates.list
  );

  const renderList = () =>
    map(templateList, (item) => <Template template={item} />);

  useEffect(() => {
    dispatch(getListAction());
  }, []);
  return (
    <Container>
      <Content>
        <Title>My templates</Title>
        <TemplatesContainer>
          {templateList?.length > 0 ? renderList() : 'Loading...'}
        </TemplatesContainer>
      </Content>
    </Container>
  );
};

export default MyTemplatesPage;
