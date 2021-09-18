import styled from 'styled-components';

import { Button, TextInput as TextInputUI } from 'components/ui';

export { AddSelectorStepsModal } from 'modules/modals/AddSelectorStepsModal';

export { RowBetween } from 'components/common';

export const TextInput = styled<any>(TextInputUI)`
  max-width: 80%;
`;

export const ApproveBtn = styled(Button).attrs({
  size: 'sm',
  variant: 'lightFilled',
})`
  width: fit-content;
`;
