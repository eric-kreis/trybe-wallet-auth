import React, { useState } from 'react';
import { Header, AddExpense, Table, EditExpense } from '../components';

function Wallet () {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  function handleEdit(itemId) {
    setId(itemId);
    setEdit(true);
  }

  function finishEdit() {
    setId('');
    setEdit(false);
  }

  return (
    <>
      <Header />
      { !edit && <AddExpense />}
      { edit && <EditExpense id={ id } onClick={ finishEdit } />}
      <Table handleEdit={ handleEdit } showButtons={ edit } />
    </>
  );
}

export default Wallet;
