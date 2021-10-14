import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import _useEffect from 'hooks/_useEffect';
import { useActions } from 'hooks/useActions';

import { getMyTemplateListAction } from 'modules/templates/store/actions';

import {
  Container,
  Content,
  Title,
  TemplatesTable,
  EmptyContainer,
} from './styles';

// Interface
import { IReducerStore } from 'store/reducers';
import { ITemplate } from 'types/templates';

const MyTemplatesPage = () => {
  const actions = useActions({ getMyTemplateListAction });

  const allTemplatesMap = useSelector<
    IReducerStore,
    { [key: number]: ITemplate }
  >((state) => state.templates.templatesMap);

  const templateListIds = useSelector<IReducerStore, number[]>(
    (state) => state.templates.userTemplatesIds
  );

  const totalTemplatesLength = 999; // TODO: ADD TOTAL

  _useEffect(() => {
    if (!templateListIds?.length) {
      actions.getMyTemplateListAction();
    }
  }, []);

  const userTemplatesList = useMemo(
    () => templateListIds.map((itemId) => allTemplatesMap[itemId]),
    [templateListIds, allTemplatesMap]
  );

  return (
    <Container>
      <Content>
        <Title>My templates</Title>
        {templateListIds?.length > 0 ? (
          <TemplatesTable
            templates={userTemplatesList}
            totalTemplatesLength={totalTemplatesLength}
          />
        ) : (
          <EmptyContainer>You have not any templates yet</EmptyContainer>
        )}
      </Content>
    </Container>
  );
};

export default MyTemplatesPage;
