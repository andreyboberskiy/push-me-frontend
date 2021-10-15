import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { space } from 'styled-system';

import { getThemeColor, getThemeFontFamily } from 'styles/theme';

import { Box } from 'components/ui/Box';
import { SpriteIcon } from 'components/ui/SpriteIcon';

function getIconColorByState(state) {
  switch (state) {
    case 'valid':
      return 'green400';
    case 'invalid':
      return 'red600';
    default:
      return 'gray200';
  }
}

export const Container = styled(Box)`
  width: 100%;
  position: relative;
`;

export const RightIcon = styled<any>(SpriteIcon)`
  ${(props) =>
    `color: ${getThemeColor(props, getIconColorByState(props.state))}`};
  cursor: pointer;
`;

function getStringStyle({ color: defColor, focusedColor }) {
  return `
      .MuiInputBase-root.Mui-focused {
        box-shadow: ${focusedColor} 0 0 3px 1px;
      }
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
      .MuiInputBase-root{
        color: ${defColor};
        fieldset {
           transition: all .2s linear;

           border: 1px solid ${defColor}; 
           &:hover{
           color${defColor};
         }
        }
        &:hover {
        border-color: ${defColor};
        fieldset {
          border-color: ${defColor};
        }
        }
      }
      
     .MuiFormLabel-root {
        &.Mui-focused {
          color: ${focusedColor};
        }
    }`;
}

function getStyleByState(props) {
  switch (props.state) {
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
        focusedColor: getThemeColor(props, 'teal500'),
      });
    }
  }
}

export const TextInputUI = styled<any>(TextField)`
  ${(props) => getStyleByState(props)}

  width: 100%;

  .MuiInputBase-root {
    transition: all 0.2s linear;
    border-radius: 15px;
    font-size: 14px;
    color: ${(props) => getThemeColor(props, 'gray800')};

    input {
      border-radius: 15px;
      padding: 16px;
    }
    fieldset {
      padding: 0;
    }
    legend span {
      display: none;
    }
  }
  .MuiFormLabel-root {
    font-size: 18px;
    color: ${(props) => getThemeColor(props, 'gray400')};
    transform: translate(14px, 16px) scale(1);

    &.Mui-focused {
      background: ${(props) => getThemeColor(props, props.layoutBg)};
      padding: 0 5px;
    }
    &.MuiInputLabel-shrink {
      transform: translate(15px, -7px) scale(0.7);
      background: ${(props) => getThemeColor(props, props.layoutBg)};
      padding: 0 5px;
    }
  }
  .MuiFormHelperText-root.Mui-error {
    color: ${(props) => getThemeColor(props, 'red400')};
    font-family: ${(props) => getThemeFontFamily(props, 0)};
    margin: 5px 0 0 5px;
  }
  ${space}
`;
