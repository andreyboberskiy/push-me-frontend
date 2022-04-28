import React, { useCallback, useState } from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import map from 'lodash/map';

import {
  FormWrapper,
  TextInputField,
  ParseField,
  SubmitButton,
  AddFieldButton,
  ParseTimePickerField,
  RowBetween,
} from 'modules/createTemplate/CreateTemplatePage/styles';

const FormByTextQuery = ({
  handleSubmit,
  values,
  form: { change: changeForm },
}: FormRenderProps) => {
  const [fieldCount, setFieldCount] = useState(1);

  const increaseCount = useCallback(() => {
    setFieldCount((prev) => prev + 1);
  }, []);

  const changeParentSelector = useCallback(
    (value: string) => {
      changeForm('parentSelector', value);
    },
    [changeForm]
  );

  return (
    <FormWrapper>
      <Field
        name="title"
        label="Title"
        placeholder="Enter your template title"
        component={TextInputField}
      />
      <Field
        name="url"
        placeholder="URL"
        label="URL"
        component={TextInputField}
        mt={4}
      />
      <Field
        name="parseTime"
        label="Refresh time"
        placeholder="Refresh time"
        component={ParseTimePickerField}
      />
      {map(new Array(fieldCount), (item, index) => (
        <Field
          key={index}
          name={`query${index + 1}`}
          placeholder="Enter text to parse same"
          component={ParseField}
          url={values.url}
          changeParentSelector={changeParentSelector}
          by="text"
          mt={4}
        />
      ))}

      <RowBetween mt={5}>
        <AddFieldButton onClick={increaseCount} mt={3}>
          Add Field
        </AddFieldButton>

        <SubmitButton onClick={handleSubmit} mt={3}>
          Submit
        </SubmitButton>
      </RowBetween>
    </FormWrapper>
  );
};

export { FormByTextQuery };
