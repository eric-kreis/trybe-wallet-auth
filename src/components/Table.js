import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import TableHead from './TableHead';
import { deleteExpense } from '../actions';
import deleteIcon from '../assets/images/recycle-bin-line.svg';
import editIcon from '../assets/images/document-edit.svg';

function Table ({ handleEdit, showButtons }) {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);

  function handleDelete(id) {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(deleteExpense(newExpenses));
  }

  return (
    <table>
      <TableHead />
      <tbody>
        { expenses.map(({
          id, value, description, currency, method, tag, exchangeRates,
        }) => {
          const exchangeRate = parseFloat(exchangeRates[currency].ask);
          const roundedRate = (Math.round((exchangeRate) * 100) / 100).toFixed(2);
          const total = (Math.round((value * exchangeRate) * 100) / 100).toFixed(2);
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ roundedRate }</td>
              <td>{ total}</td>
              <td>Real</td>
              <td
                className="table-buttons"
                style={ { display: showButtons && 'none' } }
              >
                <button
                  type="button"
                  data-testid="edit-btn"
                  className="edit-btn"
                  onClick={ () => handleEdit(id) }
                >
                  <img alt="delete" src={ editIcon } width="16px" height="16px" />
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  className="delete-btn"
                  onClick={ () => handleDelete(id) }
                >
                  <img alt="delete" src={ deleteIcon } width="16px" height="16px" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  handleEdit: propTypes.func.isRequired,
  showButtons: propTypes.bool.isRequired,
};

export default Table;
