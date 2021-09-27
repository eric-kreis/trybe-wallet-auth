import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { editExpense, fetchCurrency } from '../actions';
import Input from './Input';
import Select from './Select';
import { methodOptions, tagOptions } from '../helpers/optionsData';

function EditExpense ({id, onClick}) {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const currencyOptions = useSelector((state) => state.wallet.currencies);

  const editing = expenses.find((expense) => expense.id === id);
  const { value, description, currency, method, tag } = editing;

  const [state, setState] = useState({
    id,
    value,
    description,
    currency,
    method,
    tag,
  });

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  function handleChange({ target: { name, value } }) {
    setState({ ...state, [name]: value });
  }

  function handleClick() {
    dispatch(editExpense(state));
    onClick();
  }

  return (
    <section className="edit-expense">
      <Input
        text="Valor: "
        type="number"
        name="value"
        min="0"
        dataTestId="value-input"
        value={ state.value }
        onChange={ handleChange }
      />
      <Input
        text="Descrição: "
        type="text"
        name="description"
        dataTestId="description-input"
        value={ state.description }
        onChange={ handleChange }
      />
      <Select
        text="Moeda: "
        name="currency"
        dataTestId="currency-input"
        selected={ state.currency }
        onChange={ handleChange }
        options={ currencyOptions }
      />
      <Select
        text="Método de pagamento: "
        name="method"
        dataTestId="method-input"
        selected={ state.method }
        onChange={ handleChange }
        options={ methodOptions }
      />
      <Select
        text="Tag: "
        name="tag"
        dataTestId="tag-input"
        selected={ state.tag }
        onChange={ handleChange }
        options={ tagOptions }
      />
      <button type="button" onClick={ handleClick }>Editar despesa</button>
    </section>
  );
}

EditExpense.propTypes = {
  id: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default EditExpense;
