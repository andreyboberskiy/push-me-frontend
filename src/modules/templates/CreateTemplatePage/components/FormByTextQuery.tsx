import React, { useCallback, useMemo, useState } from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import map from 'lodash/map';

import { FormWrapper, QueryField, TextField, SubmitButton } from '../styles';

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

  const approvedQueries = useMemo(() => {
    const queries = [];
    map(values, (item) => (item?.approved ? queries.push(item.query) : null));

    return queries;
  }, [values]);

  return (
    <FormWrapper>
      <Field
        name="title"
        label="Title"
        placeholder="Enter your template title"
        component={TextField}
      />
      <Field name="url" placeholder="URL" component={TextField} />
      {map(new Array(fieldCount), (item, index) => (
        <Field
          name={`query${index + 1}`}
          placeholder="Enter text to parse same"
          component={QueryField}
          url={values.url}
          approvedQueries={approvedQueries}
          changeParentSelector={changeParentSelector}
          by="text"
        />
      ))}

      <SubmitButton onClick={increaseCount} mt={3}>
        New Field
      </SubmitButton>

      <SubmitButton onClick={handleSubmit} mt={3}>
        Submit
      </SubmitButton>
    </FormWrapper>
  );
};

export { FormByTextQuery };
