import React, { useState, useEffect } from "react";
import { Container, Header, NewUserBtn } from "./styles";
import ListItem from "../ListItem";
import { useModalContext } from "../../modal.context";
import Modal from "../Modal";
import { useNavigate } from "react-router";
import { ListInstance } from "../../services/api";

function List() {
  const [allIns, setIns] = useState([]); // instância ou "ID" dos usuários
  const navigate = useNavigate();

  const {
    modalState: { visible },
    openModal,
  } = useModalContext(); // context usado para gerenciar o modal de leitura do QRCODE

  useEffect(() => { // lista as instâncias do usuário dono do token requerido do localStorage
    const listIns = async () => {
      let data = await ListInstance({userToken: localStorage.getItem("userToken")})
      setIns(data.data)
    }
    listIns();
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
            openLiveChat={() => navigate(`/${instance}/live-chat/main`)}
          ></ListItem>
        );
      })}
    </Container>
  );
}

export default List;
