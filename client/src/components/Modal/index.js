import React, { useState, useEffect } from "react";
import { Container, ModalBox, FinishButton, Background } from "./styles";
import { io } from "socket.io-client";
import { useModalContext } from "../../modal.context";
import { InitiateInstance } from "../../services/api";

function Modal() {
  const {
    modalState: { message, visible },
    openModal,
    closeModal,
  } = useModalContext();

  const [username, setUsername] = useState();
  const [qrGenerated, setQrStatus] = useState(false);
  const [userkey, setKey] = useState();
  const [html, setHTML] = useState("");
  const socket = io("http://localhost:3001");

  const initIns = async (e) => {
    e.preventDefault()

    // cria uma nova instância de usuário
    let data = await InitiateInstance({
      key: username,
      token: process.env.REACT_APP_SECRET_TOKEN,
      userToken: localStorage.getItem("userToken"),
    });

    let parser = new DOMParser();

    var doc = parser.parseFromString(data.data.qrdata, "text/html");
    var qrcode = doc.getElementById("qrcode_box").src;

    setKey(data.data.key);
    setQrStatus(true);
    setHTML(qrcode);
  };

  useEffect(() => {
    // Função para escutar o websocket enviado do backend, se o socket contendo a key for recebido, significa que o usuário escaneou o QRCODE
    socket.on("connect", () => console.log(socket.id));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 3001);
    });

    socket.on("key", (data) => {
      if (data == userkey) {
        // se a key recebida pelo socket for igual a key já registrada pelo usuário na função initIns, => (é possivel do usuário receber multiplos sockets de multiplos usuáruios fazendo login ao mesmo tempo)
        closeModal(); // fecha o modal do QRCODE e dá reload na página
        window.location.reload(false);
      }
    });
  }, [userkey]); // esse hook é disparado toda vez que o valor do estado userKey é alterado

  return (
    <Container>
      <Background onClick={() => closeModal()} />
      <ModalBox>
        <form onSubmit={(e) => initIns(e)}>
          <input
            type="text"
            name="username"
            placeholder="Seu nome.."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="submit"
            className="submitButton"
          />
        </form>
        {qrGenerated && (
          <>
            <img src={html} />
            {/** renderiza o qr code, a partir do momento em que o qrcode for escaneado, os dados do usuário serão salvos no banco de dados */}
          </>
        )}
      </ModalBox>
    </Container>
  );
}

export default Modal;
