import React, { useEffect, useState } from "react";
import {
  Container,
  MessageInput,
  SendMsgBtn,
  FirstColumn,
  SecondColumn,
  ContactNameInput,
  ContactList,
  ContactRow,
  ContactColumn,
  ProfilePicture,
  DeleteContactBtn,
  ContactInfo,
  ContactOptions,
  Main,
} from "./styles";
import InputMask from "react-input-mask";
import CheckboxGroup from "react-checkbox-group";
import { useParams } from "react-router";

function UserPanel() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [contactNumber, setContactNumber] = useState(0);
  const [contactName, setContactName] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [userName, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const { userIns } = useParams();

  useEffect(() => {
    console.log(numbers);
  }, [numbers]);

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
          user_id: userIns,
        }),
      }).then(async (res) => {
        await window.location.reload(false);

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

  function deleteContact(number) {
    fetch(`${process.env.REACT_APP_URL}/contacts/deleteContact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        phone_number: number,
        user_token: localStorage.getItem("userToken"),
      }),
    });

    window.location.reload(false);
  }

  const sendMsg = (e) => {
    if (numbers.length > 1) {
      fetch(`${process.env.REACT_APP_URL}/message/sendMultipleMessages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: userIns,
          number_list: numbers,
          msg: msg,
        }),
      });
    } else {
      fetch(`${process.env.REACT_APP_URL}/message/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: userIns,
          msg: msg,
          phone_number: numbers[0],
        }),
      });
    }
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
    <Container>
      <Main>
        <FirstColumn>
          <ContactList>
            <CheckboxGroup name="numbers" value={numbers} onChange={setNumbers}>
              {(Checkbox) => (
                <>
                  {contacts.map((contact, index) => {
                    return (
                      <ContactRow key={index}>
                        <ContactInfo>
                          <ProfilePicture src={contact.pfp}></ProfilePicture>
                          <ContactColumn>
                            <b>{contact.contact}</b>
                            <p>{convertToPhone(contact.number)}</p>
                          </ContactColumn>
                        </ContactInfo>
                        <ContactOptions>
                          <Checkbox value={contact.number} />
                          <DeleteContactBtn
                            onClick={() => deleteContact(contact.number)}
                          />
                        </ContactOptions>
                      </ContactRow>
                    );
                  })}
                </>
              )}
            </CheckboxGroup>
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
          <form onSubmit={(e) => sendMsg(e)}>
            <h3>Olá {userName} 👋</h3>
            <MessageInput
              type="text"
              placeholder="Sua mensagem.."
              onChange={(e) => setMsg(e.target.value)}
            />
            <SendMsgBtn type="submit" value="Enviar" />
          </form>
        </SecondColumn>
      </Main>
    </Container>
  );
}

export default UserPanel;
