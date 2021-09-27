import styled from 'styled-components';
import { Box } from 'components/ui/Box';

export const ContentContainer = styled<any>(Box)`
  margin: 0 auto;
  max-width: 1360px;
  min-width: 1150px;
  width: 100%;

  ${(props) => (props.withNavbar ? 'margin: 110px auto 0;' : 'margin: 0 auto;')}
  padding: 0px 40px;
`;
