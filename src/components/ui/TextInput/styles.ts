import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { space } from 'styled-system';

import { Box } from 'components/ui';
import { getThemeColor, getThemeFontFamily } from 'styles/theme';

export const Container = styled(Box)`
  width: 100%;
`;

function getStringStyle({ color: defColor, focusedColor }) {
  return `
      .Mui-focused{
        .MuiOutlinedInput-root {
          color: ${defColor};
          fieldset {
            border: 1px solid ${focusedColor} !important;
           }
         }
          fieldset {
              border: 1px solid ${focusedColor} !important;
            }
          &:hover {
            fieldset {
              border: 1px solid ${focusedColor} !important;
            }
          }
      }
      .MuiInputBase-root:hover {
        border-color: ${defColor};
      }
      .MuiInputBase-root.Mui-focused {
        box-shadow: ${focusedColor} 0 0 3px 1px;
      }
      .MuiOutlinedInput-root {
        color: ${defColor};
        fieldset {
           transition: all .2s linear;

           border: 1px solid ${defColor}; 
           &:hover{
           color${defColor};
         }
        }
        &:hover fieldset {
          border-color: ${defColor};
        }
      }
      
     .MuiFormLabel-root {
  
      &.Mui-focused {
        color: ${focusedColor};
      }
    }`;
}

function getStyleByState(props) {
  let localState = null;
  if (props.error?.length) {
    localState = 'invalid';
  }
  switch (props.state || localState) {
    case 'valid': {
      return getStringStyle({
        color: getThemeColor(props, 'green'),
        focusedColor: getThemeColor(props, 'green'),
      });
    }
    case 'invalid': {
      return getStringStyle({
        color: getThemeColor(props, 'red400'),
        focusedColor: getThemeColor(props, 'red600'),
      });
    }
    default: {
      return getStringStyle({
        color: getThemeColor(props, 'gray200'),
        focusedColor: getThemeColor(props, 'blue500'),
      });
    }
  }
}

export const TextInputUI = styled<any>(TextField)`
  ${(props) => getStyleByState(props)}

  width: 100%;

  .MuiInputBase-root {
    border-radius: 15px;
    font-size: 14px;
    color: ${(props) => getThemeColor(props, 'gray800')};

    input {
      border-radius: 15px;
      transition: all 0.2s linear;
    }
    &.Mui-focused input {
      transition: all 0.2s linear;
    }

    legend span {
      padding: 0 10px;
      //display: none;
    }
  }
  .MuiFormLabel-root {
    transform: translate(14px, 16px) scale(1);

    color: ${(props) => getThemeColor(props, 'gray400')};
    font-size: 18px;

    &.MuiInputLabel-shrink {
      //transform: translate(5px, -20px) scale(0.7);
      transform: translate(5px, -5px) scale(0.7);
      transform-origin: top left;
    }
  }

  .MuiOutlinedInput-input {
    padding: 16px;
  }
  .MuiFormHelperText-root.Mui-error {
    color: ${(props) => getThemeColor(props, 'red400')};
    font-family: ${(props) => getThemeFontFamily(props, 0)};
    margin: 5px 0 0 5px;
  }

  ${space}
`;
