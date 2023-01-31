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
} from "./styles";
import { useParams, useNavigate } from "react-router";
import { io } from "socket.io-client";
import { ContactList } from "../UserPanel/styles";

function ChatPage() {
  const socket = io.connect("http://localhost:3001");
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");
  const [chatMsgs, setChatMsgs] = useState([]);
  const chatRef = useRef();
  const [selectedContact, setSelectedContact] = useState({
    chatId: "",
    contactId: "",
    contactPfp: "",
    contactName: "",
  });
  const { userIns, chatId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await handleGetMsgs();
      setChatMsgs(data);
    };
    getMessageDetails();
  }, [selectedContact, chatId]);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  });

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data.content);
      fetch(`${process.env.REACT_APP_URL}/live-chat/getChat`, {
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
      });
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

  const handleSendMsg = async (chatId, from, to, text) => {
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
                  <MessageContainer>
                    <p>{msg.text}</p>
                  </MessageContainer>
                ) : (
                  <MessageContainer receiver>
                    {" "}
                    <p>{msg.text}</p>
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
            onChange={(e) => setMessage(e.target.value)}
          />
          <b
            onClick={() =>
              handleSendMsg(
                selectedContact.chatId,
                userIns,
                selectedContact.contactId,
                message
              )
            }
          >
            ENVIAR
          </b>
        </ChatInputContainer>
      </ChatMain>
    </Container>
  );
}

export default ChatPage;
