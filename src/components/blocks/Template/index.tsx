import React, { memo } from 'react';
import format from 'date-fns/format';

import { ITemplate } from 'types/templates';

import { Container, Title, Url, Column, InfoText, RowBetween } from './styles';

interface ITemplateProps {
  template: ITemplate;
}

const Template = memo<ITemplateProps>(
  ({
    template: {
      title,
      enabled,
      parseTime,
      url,
      dateCreated,
      selectorsData: { selectors },
    },
  }) => {
    return (
      <Container>
        <Title>{title}</Title>
        <RowBetween>
          <Column>
            <InfoText>Url: </InfoText>
            <InfoText>Data for notification: </InfoText>
          </Column>
          <Column ml={3}>
            <Url>{url}</Url>
            <InfoText>
              {selectors.map((selector) => `${selector.title}, `)}
            </InfoText>
          </Column>
        </RowBetween>
        <Column>
          <RowBetween>
            <InfoText>
              Created at {format(new Date(dateCreated), 'dd/MM/yyyy')}
            </InfoText>
            <InfoText>{enabled ? 'Enabled' : 'Disabled'}</InfoText>
          </RowBetween>
        </Column>
      </Container>
    );
  }
);

export { Template };
