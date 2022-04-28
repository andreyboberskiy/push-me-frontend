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
        <NavLink to={routesByName.dashboard.route}>
          <TabButton name="home">Dashboard</TabButton>
        </NavLink>
        <NavLink to={routesByName.myTemplates.route}>
          <TabButton name="table-list">My templates</TabButton>
        </NavLink>
        <NavLink to={routesByName.findTemplates.route}>
          <TabButton name="search-plus">Find templates</TabButton>
        </NavLink>
        <NavLink to={routesByName.profile.route}>
          <TabButton name="user">Profile</TabButton>
        </NavLink>
        <NavLink to={routesByName.billing.route}>
          <TabButton name="credit-card">Billing</TabButton>
        </NavLink>
        <NavLink to={routesByName.settings.route}>
          <TabButton name="settings">Settings</TabButton>
        </NavLink>
      </Column>
    </Container>
  );
});

export default Sidebar;
