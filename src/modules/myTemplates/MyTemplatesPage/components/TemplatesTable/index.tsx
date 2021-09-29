import React, { useMemo, useState } from 'react';
import map from 'lodash/map';

import {
  TitleLabel,
  Header,
  Filter,
  Container,
  MainContainer,
  ItemsContainer,
  TemplateListItem,
} from './styles';

// Interfaces
import { ITemplate } from 'types/templates';

interface ITemplatesTableProps {
  templates: ITemplate[];
  hideTitle?: boolean;
  totalTemplatesLength: number;
}

const TemplatesTable: React.FC<ITemplatesTableProps> = ({
  templates,
  hideTitle,
  totalTemplatesLength,
}) => {
  const templatesLength = useMemo(() => templates?.length ?? 0, [templates]);

  const [sortedTemplates, updateSortedTemplates] =
    useState<ITemplate[]>(templates);

  const tableConfig = useMemo(
    () => [
      {
        name: 'Id',
        field: 'id',
        width: 5,
      },
      {
        name: 'Active',
        field: 'enabled',
        width: 10,
      },
      {
        name: 'Title',
        field: 'title',
        width: 20,
      },
      {
        name: 'Search values',
        field: 'values',
        width: 20,
      },
      {
        name: 'Refresh Time',
        field: 'parseTime',
        width: 20,
      },
      {
        name: 'Date Created',
        field: 'dateCreated',
        width: 20,
      },
    ],
    []
  );

  return (
    <MainContainer>
      {!hideTitle && (
        <TitleLabel>
          Showing <b>{templatesLength}</b> most recent results of{' '}
          <b>{totalTemplatesLength}</b> matches
        </TitleLabel>
      )}
      <Container>
        <Header>
          {map(tableConfig, (filter) => (
            <Filter
              name={filter.name}
              field={filter.field}
              width={filter.width}
              setList={updateSortedTemplates}
              list={sortedTemplates}
            />
          ))}
        </Header>
        <ItemsContainer>
          {map(sortedTemplates, (template) => (
            <TemplateListItem template={template} tableConfig={tableConfig} />
          ))}
        </ItemsContainer>
      </Container>
    </MainContainer>
  );
};

export { TemplatesTable };
//
