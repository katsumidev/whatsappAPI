import React, { useState, useEffect } from "react";
import { Container, Header, NewUserBtn } from "./styles";
import ListItem from "../ListItem";
import { useModalContext } from "../../modal.context";
import Modal from "../Modal";
import { useNavigate } from "react-router";

function List() {
  const [allIns, setIns] = useState([]); // instância ou "ID" dos usuários
  const navigate = useNavigate();

  const {
    modalState: { visible },
    openModal,
  } = useModalContext(); // context usado para gerenciar o modal de leitura do QRCODE

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/instance/listIns`, { // Lista todos os usuários conectados na API e que possuem o token registrado (esse token vai ser o token de login do usuário, ainda a ser feito)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userToken: localStorage.getItem("userToken"),
      })
    }).then(async (res) => {
      let data = await res.json();

      switch (res.status) {
        case 200:
          setIns(data);
          break;
      }
    });
  }, []);

  return (
    <Container>
      <NewUserBtn onClick={() => openModal()}>+ Novo user</NewUserBtn>
      {visible ? <Modal /> : <></>}
      {allIns.map((instance, index) => {
        return (
          <ListItem
            key={index} // Gera uma lista para todos os usuários que resultaram da busca, renderizando o componente ListItem para cada um.
            name={instance}
            redirect={() => navigate(`/panel/${instance}`)} 
            openLiveChat={() => navigate(`/${instance}/live-chat`)}
          ></ListItem>
        );
      })}
    </Container>
  );
}

export default List;
