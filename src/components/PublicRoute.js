import React from 'react'
import { Redirect, Route } from 'react-router';
import { useAuth } from '../context/AuthProvider';


function PublicRoute({component: Component, ...rest}) {
  const { currentUser } = useAuth()
  return(<Route
  {...rest}
  render={(props) => !currentUser ? <Component {...props} /> : <Redirect to="/carteira"></Redirect>}
  >
  </Route>)
}

export default PublicRoute;
