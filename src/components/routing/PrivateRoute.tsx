import React, {  useContext, FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

type Props = { 
  component: FunctionComponent,
  exact: boolean; } 
  & RouteComponentProps;

const PrivateRoute: FunctionComponent<Props> = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          // <Component {...props} />
          <Component {...rest} />
        )
      }
    />
  );
};

export default PrivateRoute;
