import React from 'react';
import { useSelector } from 'react-redux';

function Header () {
  const email = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);
  
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
          { email }
        </span>
        <span data-testid="total-field">
          Despesa total: R$
          { roundedTotal }
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </div>
    </header>
  );
}

export default Header;
