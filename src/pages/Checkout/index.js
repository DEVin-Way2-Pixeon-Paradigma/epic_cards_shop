import React, { useState } from 'react';

import Input from '../../components/Input';
import  Container from '../../components/Container';

import {Form} from './styles';

function Checkout() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    let currentErrors = {};

    if (!email) {
      currentErrors.email = 'Email é obrigatório';
    } 
    
    if (!password) {
      currentErrors.password = 'Senha é obrigatória';
    } 
    
    // Yup

    setErrors(currentErrors);
  }

  return (
    <Container>

      <Form onSubmit={handleSubmit}>

        <Input
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="Digite seu email"
          errorMessage={errors.email}
        />
        
        <Input
          label="Senha"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder="Digite sua senha"
          errorMessage={errors.password}
        />

        <button type="submit">Salvar</button>
      </Form>


    </Container>
  );
}

export default Checkout;