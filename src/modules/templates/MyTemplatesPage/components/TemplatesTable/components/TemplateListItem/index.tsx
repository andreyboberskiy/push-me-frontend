import React, { useCallback, useMemo } from 'react';
import map from 'lodash/map';
import { format } from 'date-fns';
import { get } from 'lodash';
import { useHistory } from 'react-router-dom';

import { parseTimeToText } from 'utils/parseTimeToText';

import routesByName from 'constants/routesByName';

import {
  Container,
  ValueContainer,
  ValueText,
  StatusCircle,
} from 'modules/templates/MyTemplatesPage/components/TemplatesTable/components/TemplateListItem/styles';

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
  const history = useHistory();
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
      selectorsData: {
        selectors: selectorsData.selectors.map((item) => item.title).join(', '),
      },
    }),
    [dateCreated, selectorsData, id, enabled, title, url, parseTime]
  );

  const pushToTemplatePage = useCallback(() => {
    history.push(routesByName.template(id));
  }, [id, history]);

  return (
    <Container onClick={pushToTemplatePage}>
      {map(tableConfig, (item) => {
        const value = get(transformedTemplateToStrings, item.field, '');

        return (
          <ValueContainer key={item.field} width={item.width}>
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
