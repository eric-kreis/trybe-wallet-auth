import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'

function Register () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');

  const { singUp } = useAuth();

  const history = useHistory();

  function validateInputs() {
    const validEmail = /\S+@\S+\.\S+/;
    const validPassword = 6;
    if (!validEmail.test(email)) {
      throw Error('Email inválido')
    } 

    if(password !== confirmPassword ) {
      throw Error('As senhas não combinam')
    }
    
    if(password.length < validPassword) {
      throw Error('A senha deve ter pelo menos 6 caracteres')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      validateInputs();
      await singUp(email, password).then((user) => console.log(user))
      history.push('/');
    } catch(error) {
      return global.alert(error.message)
    }
  }

  function handleShowPassword(boll) {
    boll ? setShowPassword('text') : setShowPassword('password')
  }

  return (
    <main>
      <h1>TrybeWallet</h1>
      <form onSubmit={ handleSubmit }>
        <img src="https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif" alt="gif pernalonga contando dinheiro" />
        <h3>Cadastrar novo usuário</h3>
        <input
          name="email"
          type="text"
          placeholder="EMAIL"
          data-testid="email-input"
          value={ email }
          onChange={ ({target: { value }}) => setEmail(value) }
        />
        <input
          name="password"
          type={showPassword}
          placeholder="SENHA"
          data-testid="password-input"
          value={ password }
          onChange={ ({target: { value }}) => setPassword(value) }
        />
        <input
          name="confirmPassword"
          type={showPassword}
          placeholder="SENHA"
          data-testid="password-input"
          value={ confirmPassword }
          onChange={ ({target: { value }}) => setConfirmPassword(value) }
        />
        <label htmlFor="reveal-password"> 
          <input 
            type="checkbox" 
            id="reveal-password" 
            onClick={({target: {checked}}) => handleShowPassword(checked)}
          />
          Mostrar senha 
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default Register;
