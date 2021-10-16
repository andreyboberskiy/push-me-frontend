import React, { memo } from 'react';

import routesByName from 'constants/routesByName';

import {
  Container,
  LogoContainer,
  Column,
  Logo,
  TabButton,
  NavLink,
  Delimiter,
} from './styles';

const Sidebar = memo(() => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Delimiter />
      <Column>
        <NavLink to={routesByName.dashboard}>
          <TabButton name="home">Dashboard</TabButton>
        </NavLink>
        <NavLink to={routesByName.myTemplates}>
          <TabButton name="table-list">My templates</TabButton>
        </NavLink>
        <NavLink to={routesByName.findTemplates}>
          <TabButton name="search-plus">Find templates</TabButton>
        </NavLink>
        <NavLink to={routesByName.profile}>
          <TabButton name="user">Profile</TabButton>
        </NavLink>
        <NavLink to={routesByName.billing}>
          <TabButton name="credit-card">Billing</TabButton>
        </NavLink>
        <NavLink to={routesByName.settings}>
          <TabButton name="settings">Settings</TabButton>
        </NavLink>
      </Column>
    </Container>
  );
});

export default Sidebar;
