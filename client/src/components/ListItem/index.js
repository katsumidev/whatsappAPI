import React, { useState, useEffect } from "react";
import {
  Container,
  Username,
  Number,
  DeleteButton,
  ViewButton,
  Options,
  LiveChatButton,
} from "./styles";

function ListItem(props) {
  const [insInfo, setInsInfo] = useState({ username: "", userId: "" }); // informações da instância do usuário
  const [valid, setValid] = useState(true); // verifica se o número é válido (usado para atualizar em tempo real o front)

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
      }),
    }).then(async (res) => {
      let data = await res.json();
      switch (res.status) {
        case 200:
          setInsInfo({
            username: data.instance_data.user.name,
            userId: data.instance_data.user.id.split(":")[0], // pega o numero de telefone do usuário da string retornada
          });
          break;
      }
    });
  }, []);

  const DeleteNumber = () => {
    fetch(`${process.env.REACT_APP_URL}/instance/deleteIns`, {
      // Busca pelo usuário recebido por props, deletando sua instância no banco de dados
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
            <LiveChatButton size={20} onClick={props.openLiveChat} />
            <ViewButton size={20} onClick={props.redirect} />
            <DeleteButton size={20} onClick={DeleteNumber} />
          </Options>
        </Container>
      )}
    </>
  );
}

export default ListItem;
