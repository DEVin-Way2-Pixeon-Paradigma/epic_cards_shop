import React, { useState, useEffect } from 'react';

import Input from '../../components/Input';

// import { Container } from './styles';

function Checkout() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    let currentErrors = [];

    if (!email) {
      currentErrors = [...currentErrors, 'EMail é obrigatório']
    } 
    
    if (!password) {
      currentErrors = [...currentErrors, 'Password é obrigatório']
    } 

    setErrors(currentErrors)
  }

  return (
    <>

      <form onSubmit={handleSubmit}>

        {errors.map(item => <p>{item}</p>)}

        <Input
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="Digite seu email"
        />
        <br />
        <Input
          label="Senha"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder="Digite sua senha"
        />

        <button type="submit">Salvar</button>
      </form>


    </>
  );
}

export default Checkout;