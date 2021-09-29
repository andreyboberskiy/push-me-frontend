import React, { useMemo } from 'react';
import map from 'lodash/map';
import { format } from 'date-fns';

import { parseTimeToText } from 'utils/parseTime';

import { Container, ValueContainer, ValueText, StatusCircle } from './styles';

// Interfaces
import { ITemplate } from 'types/templates';

interface ITemplateListItemProps {
  template: ITemplate;
  tableConfig: { name: string; field: string; width: number }[];
}

const TemplateListItem: React.FC<ITemplateListItemProps> = ({
  template,
  tableConfig,
}) => {
  const { id, title, enabled, parseTime, url, dateCreated, selectorsData } =
    template;

  const transformedTemplateToStrings = useMemo(
    () => ({
      enabled,
      id,
      title,
      url,
      dateCreated: format(new Date(dateCreated), 'dd.MM.yyyy'),
      parseTime: parseTimeToText(parseTime),
      values: selectorsData.selectors.map((item) => item.title).join(', '),
    }),
    [dateCreated, selectorsData, id, enabled, title, url, parseTime]
  );

  return (
    <Container>
      {map(tableConfig, (item) => {
        const value = transformedTemplateToStrings[item.field];
        return (
          <ValueContainer width={item.width}>
            {typeof value === 'boolean' ? (
              <StatusCircle active={value} size={16} />
            ) : (
              <ValueText>{value}</ValueText>
            )}
          </ValueContainer>
        );
      })}
    </Container>
  );
};

export { TemplateListItem };
