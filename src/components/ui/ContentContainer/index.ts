import styled from 'styled-components';
import { Box } from 'components/ui/Box';

export const ContentContainer = styled<any>(Box)`
  max-width: 1610px;
  width: 100%;
  ${(props) => (props.withNavbar ? 'margin: 110px auto 0;' : 'margin: 0 auto;')}
  padding: 0px 15px;
`;
