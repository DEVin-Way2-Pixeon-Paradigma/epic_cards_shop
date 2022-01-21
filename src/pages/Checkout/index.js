import React, { useCallback, useState } from 'react';


import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import InputDate from '../../components/InputDate';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';

import Container from '../../components/Container';

import { Form } from './styles';
import { formattedValue } from '../../utils/formattedValue';

function Checkout() {

  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  function handleSubmit(event) {
    event.preventDefault();


    // Yup

  }



  return (
    <Container>

      <Form onSubmit={handleSubmit}>

        <Input
          label="Nome do titular"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />


        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input
            label="Nº do cartão"
            value={cardNumber}
            onChange={(event) => setCardNumber(formattedValue(event.target.value, 'number-card'))}
            flexBasis="45%"
          />

          <Input
            label="CVV"
            value={cvv}
            onChange={(event) => setCvv(formattedValue(event.target.value, 'cvv'))}
            flexBasis="45%"
          />


        </div>

        <InputDate
          label="Data de expiração"
          selected={month}
          onChange={(month) => setMonth(month)}
          showMonthYearPicker
          dateFormat="MMMM"
        />

        <InputDate
          label=""
          selected={year}
          onChange={(year) => setYear(year)}
          showYearPicker
          dateFormat="yyyy"
        />



        <button type="submit">Salvar</button>
      </Form>


    </Container>
  );
}

export default Checkout;