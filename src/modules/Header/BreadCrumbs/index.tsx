import { Route, Link } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import routesByName from 'constants/routesByName';
import { getLibraries } from 'store/libraries/selectors';

import { Row, Label, CircleSeparator } from './styles';

const routesWithCustomNamesParents = [
  { route: routesByName.myTemplates.route, library: 'templates' },
];

export const BreadCrumbs = () => (
  <Row>
    <Route path="/:path" component={BreadcrumbsItem} />
  </Row>
);

const BreadcrumbsItem = ({ match }) => {
  const [injectedLabel, setInjectedLabel] = useState('');
  const libraries = useSelector(getLibraries);

  const label = useMemo(() => {
    const crumbs = match.url.split('/');
    return crumbs[crumbs.length - 1].replaceAll('-', ' ');
  }, [match]);

  useEffect(() => {
    const crumbs = match.url.split('/');
    const prevRoute = crumbs[crumbs.length - 2];

    const customLabelInfo = routesWithCustomNamesParents.find(
      (item) => item.route === `/${prevRoute}`
    );

    if (customLabelInfo) {
      const name = libraries[customLabelInfo.library][label]?.title;
      setInjectedLabel(name || 'Loading...');
    }
  }, [libraries, label]);
  return (
    <>
      <Link to={match.url || ''}>
        <Label last={match.isExact}>{injectedLabel || label}</Label>
      </Link>
      {!match.isExact && <CircleSeparator />}

      <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </>
  );
};
