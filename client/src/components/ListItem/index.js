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
import { convertToPhone } from "../../utils/conversions";
import { getInfo, deleteInstance } from "../../services/api";

function ListItem(props) {
  const [insInfo, setInsInfo] = useState({ username: "", userId: "" }); // informações da instância do usuário
  const [valid, setValid] = useState(true); // verifica se o número é válido (usado para atualizar em tempo real o front)

  useEffect(() => {
    // pega o nome e o telefone do usuário
    const getUserInfo = async () => {
      let data = await getInfo({ key: props.name });
      setInsInfo({
        username: data.data.instance_data.user.name,
        userId: data.data.instance_data.user.id.split(":")[0],
      });
    };
    getUserInfo();
  }, []);

  const DeleteNumber = async () => {
    // deleta a instância do usuário
    await deleteInstance({
      key: props.name,
      userToken: localStorage.getItem("userToken"),
    });

    setValid(!valid);
  };

  return (
    <>
      {valid && (
        <Container>
          <Username>{insInfo.username}</Username>
          <Number>{convertToPhone(insInfo.userId)}</Number>
          <Options>
            <LiveChatButton size={20} onClick={props.openLiveChat} />
            <ViewButton size={20} onClick={props.redirect} />
            <DeleteButton size={20} onClick={() => DeleteNumber} />
          </Options>
        </Container>
      )}
    </>
  );
}

export default ListItem;
