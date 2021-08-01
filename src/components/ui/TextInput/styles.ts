import styled from 'styled-components';
import { styled as styledMU, TextField } from '@material-ui/core';
import { space } from 'styled-system';

import { Box } from 'components/ui';

export const Container = styled(Box)``;

export const TextInputUI = styledMU(TextField)({
  width: '100%',
  fontFamily: 'T600',
});
