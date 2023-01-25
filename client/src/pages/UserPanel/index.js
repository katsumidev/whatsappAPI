import React, { useEffect, useState } from "react";
import { Container, MessageInput, SendMsgBtn } from "./styles";
import InputMask from "react-input-mask";
import { useParams } from "react-router";

function UserPanel() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [userName, setUsername] = useState("")
  const [msg, setMsg] = useState("");

  const { userIns } = useParams();

  useEffect(() => {
    fetch(
        // faz uma requisição para a API "cadastrando" o usuário
        `${process.env.REACT_APP_URL}/instance/info?key=${userIns}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      ).then(async (res) => {
        let data = await res.json();
  
        setUsername(data.instance_data.user.name)
      });
  }, [])

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
      <form onSubmit={sendMsg}>
      <h3>Olá {userName} 👋</h3>
        <InputMask
          mask="+99 (99) 9999-9999"
          placeholder="+__ ( ) ____-____"
          onChange={(e) => setPhoneNumber(e.target.value.replace(/[\W_]/g, ""))}
        />
        <MessageInput
          type="text"
          placeholder="Sua mensagem.."
          onChange={(e) => setMsg(e.target.value)}
        />
        <SendMsgBtn type="submit" value="Enviar" />
      </form>
    </Container>
  );
}

export default UserPanel;
