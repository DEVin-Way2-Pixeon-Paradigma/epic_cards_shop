import React, { useState } from 'react';

import Container from '../../components/Container';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Form } from './styles';

const OPTIONS_PAYMENT = [
  {
    value: 'CC',
    label: 'Cartão de crédito'
  },
  {
    value: 'CD',
    label: 'Cartão de débito'
  },
  {
    value: 'BB',
    label: 'Boleto'
  }
];

function Payment() {

  const [optionPayment, setOptionPayment] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Select
          label="Qual o método de pagamento ?"
          value={optionPayment}
          onChange={(event) => setOptionPayment(event.target.value)}
          options={OPTIONS_PAYMENT}
          description="Selecione um tipo"
        />

        <Input
          label="Cartão de crédito"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          placeholder="1111 2222 3333 444"
        />
        
      </Form>
    </Container>
  );
}

export default Payment;