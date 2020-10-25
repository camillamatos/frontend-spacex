import React from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom'


interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.FC
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const user = localStorage.getItem('@SpaceX:token')

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return ((isPrivate && user) || user) ? (
          <Component />
        ) : (
          <Redirect
            to='/login'
          />
        );
      }}
    />
  );
};

export default Route;
