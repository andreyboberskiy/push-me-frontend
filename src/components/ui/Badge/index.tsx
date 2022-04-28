import styled from 'styled-components';
import { Badge as BadgeUI } from '@material-ui/core';
import { getThemeColor } from 'styles/theme';

export const Badge = styled(BadgeUI)<{ size?: number }>`
  .MuiBadge-badge {
    background-color: ${(p) => p.theme.getColor('red500', 'teal300')};
    color: ${(props) => getThemeColor(props, 'white')};
    font-family: Helvetica, sans-serif;
    padding: 0 5px;
    ${(props) => `
    min-width: ${props.size || 15}px;
    height: ${props.size || 15}px;
    font-size: ${(props.size || 15) * 0.7}px;
    line-height: ${props.size || 15}px;
  `}
  }
`;
