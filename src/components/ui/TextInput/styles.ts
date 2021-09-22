import styled from 'styled-components';
import { styled as styledMU, TextField } from '@material-ui/core';
import { fontFamily, fontSize, space, variant } from 'styled-system';

import { Box } from 'components/ui';
import theme from 'styles/theme';

export const Container = styled(Box)`
  width: 100%;
`;

function getStringStyle({ color }) {
  return `
      .Mui-focused{
        .MuiOutlinedInput-root {
          color: ${color};
          fieldset {
            border: 3px solid ${color} !important;
           }
         }
          fieldset {
              border: 3px solid ${color} !important;
            }
          &:hover {
            fieldset {
              border: 3px solid ${color} !important;
            }
          }
      }
      .MuiInputBase-root:hover {
        border-color: ${color};
      }
      .MuiOutlinedInput-root {
        color: ${color};
        fieldset {
           border: 3px solid ${color}; 
           &:hover{
           color${color};
         }
        }
        &:hover fieldset {
          border-color: ${color};
        }
      }`;
}

function getStyleByState(state) {
  switch (state) {
    case 'valid': {
      return getStringStyle({ color: theme.colors.green });
    }
    case 'invalid': {
      return getStringStyle({ color: theme.colors.red });
    }
    default: {
      return getStringStyle({ color: theme.colors.lightBlue });
    }
  }
}

export const TextInputUI = styled<any>(TextField).attrs({})`
  ${(props) => getStyleByState(props.state)}

  width: inherit;

  .MuiInputBase-root {
    border-radius: 14px;
    font-size: ${theme.fontSizes[4]}px;
  }
  .MuiOutlinedInput-input {
    padding: 16px 24px;
  }

  ${space}
`;
