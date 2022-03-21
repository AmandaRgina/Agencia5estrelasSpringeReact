import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.nome.value,e.target.cpf.value,
      e.target.nascimento.value, e.target.telefone.value);
    e.target.nome.value = "";
    e.target.cpf.value = "";
    e.target.nascimento.value="";
    e.target.telefone.value="";
}

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <h3>Cadastrar</h3>
        <input placeholder="Nome" name="nome" />
        <input placeholder="Cpf" name="cpf" />
        <input placeholder="Nascimento" name="nascimento" />
        <input placeholder="Telefone" name="telefone" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
