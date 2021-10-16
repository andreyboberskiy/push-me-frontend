import { Route, Link } from 'react-router-dom';
import React, { useMemo } from 'react';

import { Row, Label, CircleSeparator } from './styles';

export const BreadCrumbs = () => (
  <Row>
    <Route path="/:path" component={BreadcrumbsItem} />
  </Row>
);

const BreadcrumbsItem = ({ match }) => {
  const label = useMemo(() => {
    const crumbs = match.url.split('/');
    return crumbs[crumbs.length - 1].replaceAll('-', ' ');
  }, [match]);
  return (
    <>
      <Link to={match.url || ''}>
        <Label last={match.isExact}>{label}</Label>
      </Link>
      {!match.isExact && <CircleSeparator />}

      <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </>
  );
};
