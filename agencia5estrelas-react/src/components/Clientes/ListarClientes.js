import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";

import User from "./User";


const ListarClientes = () => {
  const [clientes, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:8080/clientes")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (nome, cpf, nascimento, telefone) => {
    await  fetch(`http://localhost:8080/clientes/cadastro`, {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        telefone: telefone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((clientes) => [...clientes, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await  fetch(`http://localhost:8080/clientes/deletar/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            clientes.filter((cliente) => {
              return cliente.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(clientes);
  return (
    <div className="App">
      <h3 className="text-center">Gerenciamento de clientes</h3>

      <br />
      <AddUser onAdd={onAdd} />
    
        {clientes.map((cliente) => (
          <User
            id={cliente.id}
            key={cliente.id}
            nome={cliente.nome}
            cpf={cliente.cpf}
            nascimento={cliente.nascimento}
            telefone={cliente.telefone}
            onDelete={onDelete}
          />
        ))}
    
    </div>
  );
};

export default ListarClientes;
