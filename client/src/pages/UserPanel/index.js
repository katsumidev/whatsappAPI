import React, { useEffect, useState } from "react";
import {
  Container,
  MessageInput,
  SendMsgBtn,
  FirstColumn,
  SecondColumn,
  ContactNameInput,
  ContactList,
  ContactRow
} from "./styles";
import InputMask from "react-input-mask";
import { useParams } from "react-router";

function UserPanel() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [contactNumber, setContactNumber] = useState(0);
  const [contactName, setContactName] = useState("");
  const [userName, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const { userIns } = useParams();

  useEffect(() => {
    fetch(
      // busca as informações do usuário pegando sua id nos próprios parametros da aplicação
      `${process.env.REACT_APP_URL}/instance/getInfo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          key: userIns,
        }),
      }
    ).then(async (res) => {
      let data = await res.json();

      setUsername(data.instance_data.user.name);
    });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/contacts/consultContacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_token: localStorage.getItem("userToken"),
      }),
    }).then(async (res) => {
      let data = await res.json();

      switch (res.status) {
        case 200:
          setContacts(data);
          break;
      }
    });
  }, []);

  const addNewContact = (e) => {
    if (contactNumber > 0 && contactName != "") {
      fetch(`${process.env.REACT_APP_URL}/contacts/addContact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          phone_number: contactNumber,
          contact_name: contactName,
          user_token: localStorage.getItem("userToken"),
        }),
      }).then(async (res) => {
        switch (res.status) {
          case 200:
            break;
          case 503:
            alert("número já está registrado");
            break;
        }
      });
    } else {
      alert("preencha os campos");
      e.preventDefault();
    }
  };

  const sendMsg = (e) => {
    fetch(
      // faz uma requisição para a API "cadastrando" o usuário
      `${process.env.REACT_APP_URL}/message/text?key=${userIns}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: phoneNumber,
          message: msg,
        }),
      }
    ).then(async (res) => {
      let data = await res.json();
      alert("mensagem enviada com sucesso!!", data);
    });

    e.preventDefault();
  };

  return (
    <Container>
      <FirstColumn>
        <ContactList>
          {contacts.map((contact, index) => {
            return (
              <ContactRow>
                <b>{contact.contact}</b>
                <p>{contact.number}</p>
              </ContactRow>
            );
          })}
        </ContactList>
      </FirstColumn>
      <SecondColumn>
        <form onSubmit={addNewContact}>
          <h3>Adicionar novo contato</h3>
          <ContactNameInput
            type="text"
            placeholder="Nome do contato"
            onChange={(e) => setContactName(e.target.value)}
          />
          <InputMask
            mask="+99 (99) 9999-9999"
            placeholder="+__ ( ) ____-____"
            onChange={(e) =>
              setContactNumber(e.target.value.replace(/[\W_]/g, ""))
            }
          />
          <SendMsgBtn type="submit" value="Enviar" />
        </form>
        <form onSubmit={sendMsg}>
          <h3>Olá {userName} 👋</h3>
          <InputMask
            mask="+99 (99) 9999-9999"
            placeholder="+__ ( ) ____-____"
            onChange={(e) =>
              setPhoneNumber(e.target.value.replace(/[\W_]/g, ""))
            }
          />
          <MessageInput
            type="text"
            placeholder="Sua mensagem.."
            onChange={(e) => setMsg(e.target.value)}
          />
          <SendMsgBtn type="submit" value="Enviar" />
        </form>
      </SecondColumn>
    </Container>
  );
}

export default UserPanel;
