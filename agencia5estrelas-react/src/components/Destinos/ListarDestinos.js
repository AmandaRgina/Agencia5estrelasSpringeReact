import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import User from "./User";


const ListarDestinos = () => {
  const [destinos, setDestinos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:8080/destinos")
      .then((res) => res.json())
      .then((data) => setDestinos(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (lugar, valor) => {
    await  fetch(`http://localhost:8080/destinos`, {
      method: "POST",
      body: JSON.stringify({
        lugar: lugar,
        valor: valor
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
        setDestinos((destinos) => [...destinos, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await  fetch(`http://localhost:8080/destinos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setDestinos(
            destinos.filter((destino) => {
              return destino.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(destinos);
  return (
    <div className="App">
      <h3 className="text-center">Gerenciamento de destinos</h3>

      <br />
      <AddUser onAdd={onAdd} />
    
        {destinos.map((destino) => (
          <User
            id={destino.id}
            key={destino.id}
            lugar={destino.lugar}
            valor={destino.valor}
            onDelete={onDelete}
          />
        ))}
    
    </div>
  );
};

export default ListarDestinos;
