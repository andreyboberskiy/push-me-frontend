import styled from 'styled-components';

import { Box, Button, Image } from 'components/ui';

import mainLogo from 'assets/images/common/mainLogo.png';

// types
import { IBoxProps } from '../../components/ui/Box';

interface IContainer extends IBoxProps {
  showShadow?: boolean;
}

export { ContentContainer } from 'components/ui';

export const Container = styled(Box).attrs({ bg: 'darkBlue' })<IContainer>`
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  ${(props) =>
    props.showShadow && 'box-shadow: 0px 0px 15px 1px rgba(34, 60, 80, 0.93);'}
`;

export const NavBar = styled(Box).attrs({
  p: 3,
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Image).attrs({
  src: mainLogo,
})`
  display: block;
  max-width: 150px;
`;

export const LeftMenu = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
export const AuthButton = styled<any>(Button).attrs({
  variant: 'default',
  fontSize: 5,
})``;

export const RightAuthMenu = styled(LeftMenu)``;
