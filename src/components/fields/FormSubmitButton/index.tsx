import { FormSpy } from 'react-final-form';

import { Button } from './styles';

export const FormSubmitButton = (props) => {
  return (
    <FormSpy>
      {({ valid, submitting }) => (
        <Button type="submit" disabled={!valid || submitting} {...props}>
          Submit
        </Button>
      )}
    </FormSpy>
  );
};
