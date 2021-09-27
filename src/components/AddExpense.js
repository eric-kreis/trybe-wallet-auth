import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpense, fetchCurrency } from '../actions';
import Input from './Input';
import Select from './Select';
import { methodOptions, tagOptions } from '../helpers/optionsData';

function AddExpense (){
  const [id, setId] = useState(0);
  const [state, setState] = useState({
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Comida',
  });

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const currencyOptions = useSelector((state) => state.wallet.currencies);

  useEffect(() => {
    dispatch(fetchCurrency())
  }, [dispatch]);

  useEffect(() => {
    if (expenses.length > 0) {
      const newId = (expenses[expenses.length - 1].id) + 1;
      setId(newId);
    }
  }, [expenses]);

  function handleChange({ target: { name, value } }) {
    setState({ ...state, [name]: value  });
  }

  function handleAddExpense() {
    const { value, description } = state;
    if (value && description) {
      const expense = { ...state, id };
      dispatch(fetchExpense(expense))
      setState({
        ...state,
        value: 0,
        description: '',
      });
      setId(id + 1);
    }
  }

  const { value, description } = state;

  return (
    <section className="add-expense">
      <Input
        text="Valor: "
        type="number"
        name="value"
        min="0"
        dataTestId="value-input"
        value={ value }
        onChange={ handleChange }
      />
      <Input
        text="Descrição: "
        type="text"
        name="description"
        dataTestId="description-input"
        value={ description }
        onChange={ handleChange }
      />
      <Select
        text="Moeda: "
        name="currency"
        dataTestId="currency-input"
        onChange={ handleChange }
        options={ currencyOptions }
      />
      <Select
        text="Método de pagamento: "
        name="method"
        dataTestId="method-input"
        onChange={ handleChange }
        options={ methodOptions }
      />
      <Select
        text="Tag: "
        name="tag"
        dataTestId="tag-input"
        onChange={ handleChange }
        options={ tagOptions }
      />
      <button type="button" onClick={ handleAddExpense }>Adicionar despesa</button>
    </section>
  );
}

export default AddExpense;
