import styled from 'styled-components';

import { Button, TextInput as TextInputUI } from 'components/ui';

export { AddSelectorStepsModal } from 'modules/modals/AddSelectorStepsModal';

export { RowBetween } from 'components/common';

export const TextInput = styled<any>(TextInputUI)`
  width: 80%;
  .MuiInputBase-root:hover {
    border-color: green;
  }
  .MuiOutlinedInput-notchedOutline {
  }
  .MuiOutlinedInput-root {
    fieldset {
      ${(props) => props.approved && 'border: 2px solid green;'}
    }
    &:hover fieldset {
      border-color: darkGreen; 
    }
    
`;

export const ApproveBtn = styled(Button).attrs({ size: 'xs' })`
  width: fit-content;
`;
