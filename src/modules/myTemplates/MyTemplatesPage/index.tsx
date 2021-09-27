import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getListAction } from 'modules/myTemplates/store/actions';

import { Container, Content, Title, TemplatesTable } from './styles';

// Interface
import { IReducerStore } from 'store/reducers';
import { ITemplate } from 'types/templates';

const MyTemplatesPage = () => {
  const dispatch = useDispatch();
  const templateList = useSelector<IReducerStore, ITemplate[]>(
    (state) => state.templates.list
  );

  const totalTemplatesLength = 999; // TODO: ADD TOTAL

  useEffect(() => {
    if (!templateList?.length) {
      dispatch(getListAction());
    }
  }, []);
  return (
    <Container>
      <Content>
        <Title>My templates</Title>
        {templateList?.length > 0 ? (
          <TemplatesTable
            templates={templateList}
            totalTemplatesLength={totalTemplatesLength}
          />
        ) : (
          'You have not any templates'
        )}
      </Content>
    </Container>
  );
};

export default MyTemplatesPage;
