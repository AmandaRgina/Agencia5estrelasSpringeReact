import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import User from "./User";


const ListarPromocoes = () => {
  const [promocoes, setPromocoes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:8080/promocoes")
      .then((res) => res.json())
      .then((data) => setPromocoes(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (lugar, valor) => {
    await  fetch(`http://localhost:8080/promocoes`, {
      method: "POST",
      body: JSON.stringify({
        lugar_promocoes: lugar,
        valor_promoocoes: valor
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
        setPromocoes((promocoes) => [...promocoes, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await  fetch(`http://localhost:8080/promocoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPromocoes(
            promocoes.filter((promocao) => {
              return promocao.id_promocoes !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(promocoes);
  return (
    <div className="App">
      <h3 className="text-center">Gerenciamento de promocoes</h3>

      <br />
      <AddUser onAdd={onAdd} />
    
        {promocoes.map((promocao) => (
          <User
            id={promocao.id_promocoes}
            key={promocao.id_promocoes}
            lugar={promocao.lugar_promocoes}
            valor={promocao.valor_promoocoes}
            onDelete={onDelete}
          />
        ))}
    
    </div>
  );
};

export default ListarPromocoes;
