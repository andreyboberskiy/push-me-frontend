import React, { memo, useCallback } from 'react';
import { Form } from 'react-final-form';

import { FormByTextQuery } from 'modules/createTemplate/CreateTemplatePage/components/FormByTextQuery';

import {
  Container,
  Content,
  Title,
} from 'modules/createTemplate/CreateTemplatePage/styles';
import { IParseFieldState } from 'components/fields/ParseField';
import map from 'lodash/map';
import createTemplateService from 'modules/createTemplate/service';

const initialValues = {
  url: '',
  title: '',
  parseTime: { s: 0, m: 0, h: 0, d: 0 },
  parentSelector: null,
  query1: {
    title: '',
    query: '',
    approved: false,
  },
};

function mapParseFieldsToSelectors(parseFields: IParseFieldState[]) {
  return map(parseFields, (item) => ({
    title: item.title,
    selector: item.selector,
    excludedSelectors: item.excludedSelectors,
  }));
}

const CreateTemplatePage = () => {
  const handleSubmit = useCallback(
    async ({ title, url, parseTime, parentSelector, ...rest }) => {
      try {
        const selectors = mapParseFieldsToSelectors(rest);
        const payload = {
          title,
          url,
          parseTime,
          selectorsData: {
            parent: parentSelector,
            selectors,
          },
        };

        await createTemplateService.create(payload);
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    },
    []
  );

  return (
    <Container>
      <Content>
        <Title>Create new template</Title>
      </Content>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        render={FormByTextQuery}
      />
    </Container>
  );
};

export default memo(CreateTemplatePage);
