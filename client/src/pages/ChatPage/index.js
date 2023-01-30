import React, { useEffect, useState } from "react";
import {
  ContactPfp,
  ContactRow,
  ContactName,
  Container,
  ChatMain,
  ChatInputContainer,
  ChatInput,
  ContactTopBar,
} from "./styles";
import { useParams } from "react-router";
import { ContactList } from "../UserPanel/styles";

function ChatPage() {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState({
    chatId: "",
    contactId: "",
    contactPfp: "",
    contactName: "",
  });
  const { userIns } = useParams();

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

  const handleSendMsg = async () => {
    fetch(`${process.env.REACT_APP_URL}/live-chat/newMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        chatId: selectedContact.chatId,
        from: userIns,
        to: selectedContact.contactId,
        text: message,
        type: "text",
      }),
    }).then(async (res) => {
      let data = await res.text();

      console.log(data);
    });
  };

  const handleGetChat = async (number, pfp, name) => {
    fetch(`${process.env.REACT_APP_URL}/live-chat/getChat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from: userIns,
        to: number,
      }),
    }).then(async (res) => {
      let data = await res.json();

      setSelectedContact({
        chatId: data._id,
        contactId: number,
        contactPfp: pfp,
        contactName: name,
      });
    });
  };

  return (
    <Container>
      <ContactList>
        {contacts.map((contact, index) => {
          return (
            <ContactRow
              key={index}
              onClick={() =>
                handleGetChat(contact.number, contact.pfp, contact.contact)
              }
            >
              <ContactPfp src={contact.pfp} />
              <ContactName>{contact.contact}</ContactName>
            </ContactRow>
          );
        })}
      </ContactList>
      <ChatMain>
        <ContactTopBar>
          <ContactPfp src={selectedContact.contactPfp} />
          <ContactName>{selectedContact.contactName}</ContactName>
        </ContactTopBar>
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Mensagem"
            onChange={(e) => setMessage(e.target.value)}
          />
          <b onClick={() => handleSendMsg()}>ENVIAR</b>
        </ChatInputContainer>
      </ChatMain>
    </Container>
  );
}

export default ChatPage;
