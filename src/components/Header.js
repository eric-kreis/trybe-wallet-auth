import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useAuth } from '../context/AuthProvider';

function Header () {
  const expenses = useSelector((state) => state.wallet.expenses);
  const history = useHistory();
  
  const { currentUser, logout } = useAuth();

  async function signOut() {
    try{
      await logout();
      history.push('/')
    } catch (error){
      return global.alert(error.message)
    }
  }

  const total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
    const exchangeRate = parseFloat(exchangeRates[currency].ask);
    acc += value * exchangeRate;
    return acc;
  }, 0);

  const roundedTotal = (Math.round(total * 100) / 100).toFixed(2);

  return (
    <header>
      <h1>TrybeWallet</h1>
      <div>
        <span data-testid="email-field">
          Email: 
          { currentUser.email }
        </span>
        <span data-testid="total-field">
          Despesa total: R$
          { roundedTotal }
          <span data-testid="header-currency-field">BRL</span>
        </span>
        <button type="button" onClick={signOut}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
