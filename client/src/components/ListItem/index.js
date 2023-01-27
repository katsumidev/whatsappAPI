import React, { useState, useEffect } from "react";
import {
  Container,
  Username,
  Numbername,
  Number,
  DeleteButton,
  ViewButton,
  Options,
} from "./styles";

function ListItem(props) {
  const [insInfo, setInsInfo] = useState({ username: "", userId: "" });
  const [valid, setValid] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/instance/getInfo`, {
      // Busca pelo usuário recebido por props, pegando suas informações
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        key: props.name,
        userToken: "teste",
      }),
    }).then(async (res) => {
      let data = await res.json();

      switch (res.status) {
        case 200:
          setInsInfo({
            username: data.instance_data.user.name,
            userId: data.instance_data.user.id.split(":")[0], // pega o numero de telefone do usuário
          });
          break;
      }
    });
  }, []);

  const DeleteNumber = () => {
    fetch(`${process.env.REACT_APP_URL}/instance/deleteIns`, {
      // Busca pelo usuário recebido por props, pegando suas informações
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        key: props.name,
        userToken: "teste",
      }),
    })

      setValid(false);
  };

  function convertToPhone(p) {
    p =
      "+" +
      p.substr(0, 2) +
      " (" +
      p.substr(2, 2) +
      ") " +
      p.substr(4, 4) +
      "-" +
      p.substr(8, 4);
    return p;
  }


  return (
    <>
      {valid && (
        <Container>
          <Username>{insInfo.username}</Username>
          <Number>{convertToPhone(insInfo.userId)}</Number>
          <Options>
            <ViewButton size={20} onClick={props.redirect} />
            <DeleteButton size={20} onClick={DeleteNumber} />
          </Options>
        </Container>
      )}
    </>
  );
}

export default ListItem;
