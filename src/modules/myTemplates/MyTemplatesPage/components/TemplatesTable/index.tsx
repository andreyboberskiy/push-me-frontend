import React, { useMemo, useState } from 'react';
import map from 'lodash/map';

import { TitleLabel, Header, Filter, Container } from './styles';

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

  const filtersConfig = useMemo(
    () => [
      {
        name: 'Title',
        field: 'title',
      },
    ],
    []
  );
  return (
    <>
      {!hideTitle && (
        <TitleLabel>
          Showing {templatesLength} most recent results of{' '}
          {totalTemplatesLength} matches
        </TitleLabel>
      )}
      <Container>
        <Header>
          {map(filtersConfig, (filter) => (
            <Filter
              name={filter.name}
              field={filter.field}
              setList={updateSortedTemplates}
            />
          ))}
        </Header>
      </Container>
    </>
  );
};

export { TemplatesTable };
//
// <ItemsContainer>
//   {map(sortedTemplates, (template) => (
//       <TemplateListItem template={template} />
//   ))}
// </ItemsContainer>
