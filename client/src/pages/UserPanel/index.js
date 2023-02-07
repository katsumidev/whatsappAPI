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
import { convertToPhone } from "../../utils/conversions";
import defaultPic from "../../assets/defaultPic.jpg";
import { useParams } from "react-router";
import {
  getInfo,
  getContacts,
  addNewContact,
  deleteUserContact,
  sendSingleMessage,
  sendMultipleMessages,
} from "../../services/api";

function UserPanel() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [contactNumber, setContactNumber] = useState(0);
  const [contactName, setContactName] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const { userIns } = useParams();

  useEffect(() => {
    // pega o nome do usuário
    const getUserInfo = async () => {
      let data = await getInfo({ key: userIns });
      setUsername(data.data.instance_data.user.name);
    };
    getUserInfo();
  });

  useEffect(() => {
    // pega os contatos do usuário
    const loadContacts = async () => {
      let data = await getContacts({
        user_token: localStorage.getItem("userToken"),
      });
      setContacts(data.data);
    };
    loadContacts();
  }, []);

  const addContact = async (e) => {
    // adiciona um novo contato
    if (contactNumber > 0 && contactName != "") {
      let data = await addNewContact({
        phone_number: contactNumber,
        contact_name: contactName,
        user_token: localStorage.getItem("userToken"),
        user_id: userIns,
      });
      window.location.reload(false);
    } else {
      alert("preencha os campos");
      e.preventDefault();
    }
  };

  const deleteContact = async (number) => {
    // deleta o contato do usuário
    let data = await deleteUserContact({
      phone_number: number,
      user_token: localStorage.getItem("userToken"),
    });

    window.location.reload(false);
  };

  const sendMsg = async (e) => {
    // enviar mensagens automática através do painel de usuário
    if (numbers.length > 1) {
      await sendMultipleMessages({
        user_id: userIns,
        number_list: numbers,
        msg: msg,
      });
    } else {
      await sendSingleMessage({
        user_id: userIns,
        phone_number: numbers[0],
        msg: msg,
      });
    }

    e.preventDefault();
  };

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
                          <ProfilePicture
                            src={contact.pfp != null ? contact.pfp : defaultPic}
                          ></ProfilePicture>
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
          <form onSubmit={addContact}>
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
            <h3>Olá {username} 👋</h3>
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
