import React, { useEffect, useRef, useState } from "react";
import {
  ContactPfp,
  ContactRow,
  ContactName,
  Container,
  ChatMain,
  ChatInputContainer,
  ChatInput,
  ContactTopBar,
  MessageContainer,
  Chat,
  MessageBtn,
} from "./styles";
import { useParams, useNavigate } from "react-router";
import { io } from "socket.io-client";
import { ContactList } from "../UserPanel/styles";
import { convertToDate } from "../../utils/convertDate";

function ChatPage() {
  const [contacts, setContacts] = useState([]); // estado que guarda os contatos do usuário
  const [message, setMessage] = useState(""); // estado que guarda o valor do input do usuário
  const [chatMsgs, setChatMsgs] = useState([]); // estado que guarda o histórico de mensagens com o contato selecionado
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const chatRef = useRef(); // hook auxiliar para o scroll do chat
  const [selectedContact, setSelectedContact] = useState({
    chatId: "",
    contactId: "",
    contactPfp: "",
    contactName: "",
  }); // estado que guarda as informações do contato selecionado
  const { userIns, chatId } = useParams(); // usa o hook useParams do react-router para pegar os parametros passados através da URL (instância do usuário e o ID do chat selecionado)
  const navigate = useNavigate();

  useEffect(() => {
    // hook chamado para pegar as mensagens do contato selecionado e grava-las no state chatMsgs
    const getMessageDetails = async () => {
      let data = await handleGetMsgs();
      setChatMsgs(data);
    };
    getMessageDetails();
  }, [selectedContact, chatId, newMessageFlag]); // o hook é disparado toda vez que o usuário seleciona um chat ou uma mensagem é enviada ou recebida

  useEffect(() => {
    // hook para sempre manter o scroll do chat no final
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  });

  useEffect(() => {
    let socket = io.connect("http://localhost:3001"); // socket de conexão com o back-end

    const saveReceiverMsg = async (data) => {
      await fetch(`${process.env.REACT_APP_URL}/live-chat/getChat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          from: data.to,
          to: data.from,
        }),
      }).then(async (res) => {
        let req_data = await res.json();
        let chatId = req_data._id;

        handleSendMsg(chatId, data.from, data.to, data.content);
        setNewMessageFlag((prev) => !prev);
      });
    };

    // hook que recebe as requisições de socket do servidor (os sockets mandam as mensagem recebidas pelo usuário)
    socket.on("message", saveReceiverMsg);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // esse hook é disparado no primeiro load da página e serve para buscar a lista de contatos do usuário
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

  const handleSendMsg = async (chatId, from, to, text) => {
    setMessage("");

    // função para enviar uma nova mensagem
    fetch(`${process.env.REACT_APP_URL}/live-chat/newMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        chatId: chatId,
        from: from,
        to: to,
        text: text,
        type: "text",
      }),
    }).then(async (res) => {
      setNewMessageFlag((prev) => !prev);
    });
  };

  const handleGetChat = async (number, pfp, name) => {
    // essa função serve para buscar as informações do chat selecionado
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

      navigate(`/${userIns}/live-chat/${data._id}`);
      setSelectedContact({
        chatId: data._id,
        contactId: number,
        contactPfp: pfp,
        contactName: name,
      });
    });
  };

  async function handleGetMsgs() {
    // função usada para buscar o histórico de mensagens do usuário com um determinado contato
    const res = await fetch(
      `${process.env.REACT_APP_URL}/live-chat/getMessages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          chatId: chatId,
        }),
      }
    );

    const json_res = await res.json();
    return json_res;
  }

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
              selected={
                selectedContact.contactId == contact.number ? "selected" : "not"
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
        <Chat ref={chatRef}>
          {chatMsgs.map((msg, index) => {
            return (
              <>
                {userIns == msg.from ? (
                  <MessageContainer key={index}>
                    <p>{msg.text}</p>
                    <sub>{convertToDate(msg.date)}</sub>
                  </MessageContainer>
                ) : (
                  <MessageContainer receiver key={index}>
                    {" "}
                    <p>{msg.text}</p>
                    <sub>{convertToDate(msg.date)}</sub>
                  </MessageContainer>
                )}
              </>
            );
          })}
        </Chat>
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MessageBtn
            size={30}
            onClick={() =>
              handleSendMsg(
                selectedContact.chatId,
                userIns,
                selectedContact.contactId,
                message
              )
            }
          />
        </ChatInputContainer>
      </ChatMain>
    </Container>
  );
}

export default ChatPage;