import React from 'react';
import { Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import './App.scss';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/carteira" component={ Wallet } />
        <PublicRoute path="/registro" component={ Register } />
        <PublicRoute path="/redefinirsenha" component={ ForgotPassword } />
        <PublicRoute path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
