import React, { memo, ReactElement, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface IProps {
  to: string;
  children: ReactElement | ReactElement[];
}

export const NavLink = memo<IProps>(({ to, children, ...props }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const active = pathname.includes(to);

  const handlePush = useCallback(() => {
    history.push(to);
  }, [history, to]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props, active });
    }
    return child;
  });

  return <div onClick={handlePush}>{childrenWithProps}</div>;
});
