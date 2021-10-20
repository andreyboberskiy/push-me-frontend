import React, { useMemo } from 'react';

import { Table, TemplateListItem } from './styles';

// Interfaces
import { ITemplate } from 'types/templates';

interface ITemplatesTableProps {
  templates: ITemplate[];
  loading: boolean;
}

const TemplatesTable: React.FC<ITemplatesTableProps> = ({
  templates,
  loading,
}) => {
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
        field: 'selectorsData.selectors',
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
        sortType: 'date',
      },
    ],
    []
  );

  return (
    <Table
      config={tableConfig}
      list={templates}
      loading={loading}
      renderItem={({ item, config }) => {
        return <TemplateListItem template={item} tableConfig={config} />;
      }}
    />
  );
};

export { TemplatesTable };
//
