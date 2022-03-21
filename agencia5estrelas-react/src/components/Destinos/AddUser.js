import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.lugar.value,e.target.valor.value);
    e.target.lugar.value = "";
    e.target.valor.value = "";
}

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <h3>Cadastrar</h3>
        <input placeholder="Lugar" name="lugar" />
        <input placeholder="Valor" name="valor" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
