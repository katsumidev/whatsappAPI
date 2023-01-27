import React, { useState, useEffect } from "react";
import { Container, ModalBox, FinishButton, Background } from "./styles";
import { io } from "socket.io-client";
import { useModalContext } from "../../modal.context";

function Modal() {
  const {
    modalState: { message, visible },
    openModal,
    closeModal,
  } = useModalContext();

  const [username, setUsername] = useState();
  const [qrGenerated, setQrStatus] = useState(false);
  const [key, setKey] = useState("");
  const [html, setHTML] = useState("");

  const initIns = (e) => {
    fetch(
      // faz uma requisição para a API "cadastrando" o usuário
      `${process.env.REACT_APP_URL}/instance/initUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          key: username,
          token: process.env.REACT_APP_SECRET_TOKEN,
          userToken: localStorage.getItem("userToken"),
        }),
      }
    ).then(async (res) => {
      let data = await res.text();
      let parser = new DOMParser(); // a requisição retorna um código HTML no formato de uma string

      var doc = parser.parseFromString(data, "text/html"); // converte a string em formato HTML
      let qrcode = doc.getElementById("qrcode_box").src;

      setQrStatus(true);
      setHTML(qrcode);
    });

    e.preventDefault();
  };

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => console.log(socket.id));

    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 3001);
    });
    socket.on("key", (data) => setKey(data));
    console.log(key)
    socket.on("disconnect", () => setKey(""));
  }, []);

  function verifyQrScan() {}

  return (
    <Container>
      <Background onClick={() => closeModal()} />
      <ModalBox>
        <form onSubmit={initIns}>
          <input
            type="text"
            name="username"
            placeholder="Seu nome.."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="submit" className="submitButton" />
        </form>
        {qrGenerated && (
          <>
            <img src={html} />
            {/** renderiza o qr code, a partir do momento em que o qrcode for escaneado, os dados do usuário serão salvos no banco de dados */}
            <FinishButton onClick={() => verifyQrScan()}>Pronto!</FinishButton>
          </>
        )}
      </ModalBox>
    </Container>
  );
}

export default Modal;
