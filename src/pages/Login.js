import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [blockSubmit, setBlockSubmit] = useState(true);
  const [showPassword, setShowPassword] = useState('password');

  const { login } = useAuth();

  const history = useHistory();

  function validateInputs() {
    const validEmail = /\S+@\S+\.\S+/;
    const validPassword = 6;
    if (validEmail.test(email) && password.length >= validPassword) {
      setBlockSubmit(false)
    } else {
      setBlockSubmit(true)
    }
  }

  useEffect(validateInputs, [email, password])

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await login(email, password)
      history.push('/carteira');
    } catch(error) {
      return global.alert('Falha ao fazer o login');
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
        <h3>Login</h3>
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
          disabled={ blockSubmit }
          className={ blockSubmit ? 'disabled-btn' : 'login-btn' }
          onClick={handleSubmit}
        >
          Entrar
        </button>
        <Link to="/registro" className="login-btn" >Cadastro</Link>
        <Link to="/redefinirsenha" className="login-btn" >Esqueceu a senha?</Link>
      </form>
    </main>
  );
}

export default Login;
