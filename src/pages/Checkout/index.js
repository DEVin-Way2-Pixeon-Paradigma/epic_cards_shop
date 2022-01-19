import React, { useState } from 'react';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import InputDate from '../../components/InputDate';

import Container from '../../components/Container';

import { Form } from './styles';

function Checkout() {

  const [startDate, setStartDate] = useState(new Date());

  const [color, setColor] = useState('');
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

        <InputDate
          label="Qual o seu aniversário ?"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <Textarea
          label="Comentário"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="Digite seu email"
          errorMessage={errors.email}
        />

        <Input
          type="date"
          label="Senha"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder="Digite sua senha"
          errorMessage={errors.password}
        />

        <Select
          label="Qual sua cor favorita ?"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          description="Qual é sua cor favorita ? "
          options={
            [
              {
                label: 'Vermelho',
                value: 'red'
              },
              {
                label: 'azul',
                value: 'blue'
              },
              {
                label: 'Branco',
                value: 'white'
              }
            ]
          }
        />

        <button type="submit">Salvar</button>
      </Form>


    </Container>
  );
}

export default Checkout;