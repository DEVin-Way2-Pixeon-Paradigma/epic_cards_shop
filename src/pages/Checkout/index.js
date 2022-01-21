import React, { useCallback, useEffect, useState } from 'react';


import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import InputDate from '../../components/InputDate';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import {toast} from 'react-toastify';
import Container from '../../components/Container';

import { Form } from './styles';
import { formattedValue } from '../../utils/formattedValue';

function Checkout() {

  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')


  const [list, setList] = useState([])

  useEffect(() => {
    async function handleGetPedidos() {
      const response = await fetch('http://localhost:3333/pedidos')
      const data = await response.json()
      setList(data)
    }
    handleGetPedidos();
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();

    // GET 
    try {
      await fetch('http://localhost:3335/pedidos',
        {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            card_number: cardNumber,
            cvv: cvv,
            month: month,
            year: year
          }),
          headers: { 'Content-Type': 'application/json' },
        },
      )
      toast.success('Cadastrado com sucesso')
    } catch (error) {
      toast.error('Deu ruim')
    }
    // POST - CRIAR
  }



  return (
    <Container>


      {list.map(item => <p>{item.name}</p>)}


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
          label="Ano"
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