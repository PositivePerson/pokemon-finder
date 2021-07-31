import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: FunctionComponent,
  exact: boolean;
}
  & RouteComponentProps;

const PrivateRoute: FunctionComponent<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
      (
        <Component {...rest} />
      )
      }
    />
  );
};

export default PrivateRoute;
