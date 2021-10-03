import React, { useMemo } from 'react';

import {
  Table,
  TemplateListItem,
} from 'modules/templates/MyTemplatesPage/components/TemplatesTable/styles';

// Interfaces
import { ITemplate } from 'types/templates';

interface ITemplatesTableProps {
  templates: ITemplate[];
  totalTemplatesLength: number;
}

const TemplatesTable: React.FC<ITemplatesTableProps> = ({
  templates,
  totalTemplatesLength,
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

  const label = useMemo(() => {
    return `Showed ${templates.length} templates of ${totalTemplatesLength}`;
  }, [templates, totalTemplatesLength]);

  return (
    <Table
      label={label}
      config={tableConfig}
      list={templates}
      renderItem={({ item, config }) => {
        return <TemplateListItem template={item} tableConfig={config} />;
      }}
    />
  );
};

export { TemplatesTable };
//
