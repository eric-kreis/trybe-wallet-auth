import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider'

function ForgotPassword () {
  const [email, setEmail] = useState('');


  const { resetPassword } = useAuth();


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await resetPassword(email)
      global.alert('Email enviado com sucesso')
    } catch(error) {
      return global.alert(error.message)
    }
  }

  return (
    <main>
      <h1>TrybeWallet</h1>
      <form onSubmit={ handleSubmit }>
        <img src="https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif" alt="gif pernalonga contando dinheiro" />
        <h3>Digite seu email</h3>
        <input
          name="email"
          type="text"
          placeholder="EMAIL"
          data-testid="email-input"
          value={ email }
          onChange={ ({target: { value }}) => setEmail(value) }
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </main>
  );
}

export default ForgotPassword;
