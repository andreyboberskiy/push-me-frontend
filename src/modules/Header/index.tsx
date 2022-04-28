import {
  Container,
  BreadCrumbs,
  RightSide,
  HeaderSearchInput,
  Notifications,
  ProfileMenu,
} from './styles';

const Header = () => {
  return (
    <Container>
      <BreadCrumbs />
      <RightSide>
        <Notifications />
        <HeaderSearchInput />
        <ProfileMenu />
      </RightSide>
    </Container>
  );
};

export default Header;
