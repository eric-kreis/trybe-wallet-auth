import React from 'react'
import { Redirect, Route } from 'react-router';
import { useAuth } from '../context/AuthProvider';


function PrivateRoute({component: Component, ...rest}) {
  const { currentUser } = useAuth()
  return(<Route
  {...rest}
  render={(props) => currentUser ? <Component {...props} /> : <Redirect to="/"></Redirect>}
  >
  </Route>)
}

export default PrivateRoute;
