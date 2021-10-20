import styled from 'styled-components';

import { TabButton as TabButtonUI, Text } from 'components/ui';

export { RowBetween } from 'components/common';

export const TabButton = styled(TabButtonUI).attrs({
  size: 'lg',
})`
  width: 23%;

  justify-content: space-between;
  flex-direction: row-reverse;

  transition: all 0.2s linear;
  &:hover {
    transform: translateY(-2px);
  }
`;
export const Label = styled(Text).attrs({ color: 'gray400' })`
  font-size: 14px;
`;

export const Value = styled(Text).attrs({ color: 'gray700', mt: 1 })`
  font-size: 18px;
  text-align: left;
`;
