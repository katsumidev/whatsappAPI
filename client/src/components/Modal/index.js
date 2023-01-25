import React, { useState, useEffect } from "react";
import { Container, ModalBox, FinishButton, Background } from "./styles";
import { useModalContext } from "../../modal.context";

function Modal() {
  const {
    modalState: { message, visible },
    openModal,
    closeModal,
  } = useModalContext();

  const [username, setUsername] = useState();
  const [qrGenerated, setQrStatus] = useState(false);
  const [html, setHTML] = useState("");

  const initIns = (e) => {
    fetch(
      // faz uma requisição para a API "cadastrando" o usuário
      `${process.env.REACT_APP_URL}/instance/init?token=${process.env.REACT_APP_SECRET_TOKEN}&key=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then(async (res) => {
      switch (res.status) {
        case 200:
          setTimeout(() => {
            // delay para a API gerar o qrcode
            fetch(`${process.env.REACT_APP_URL}/instance/qr?key=${username}`, {
              // quando a requisição é concluida, faz uma nova para gerar o qrcode (a api só gera qrcodes para usuários já "cadastrados")
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
              .then(async (res) => {
                switch (res.status) {
                  case 200:
                    return res.text();
                }
              })
              .then(function (text) {
                let parser = new DOMParser(); // a requisição retorna um código HTML no formato de uma string

                var doc = parser.parseFromString(text, "text/html"); // converte a string em formato HTML
                let qrcode = doc.getElementById("qrcode_box").src;

                setQrStatus(true);
                setHTML(qrcode); // salva um state com o valor da src do qrcode
              });
          }, 2000);
          break;
        case 404:
          alert(`servidor fora do ar - ${res.status} - ${res.statusText}`);
          break;
      }
    });

    e.preventDefault();
  };

  function createUser() {
    fetch(
      // faz uma requisição para a API "cadastrando" o usuário
      `${process.env.REACT_APP_URL}/instance/info?key=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then(async (res) => {
      let data = await res.json();

      console.log(data);
      if (data.instance_data.user.id != null) {
        closeModal();
        window.location.reload();
      } else {
        alert("Por favor escaneie o qrcode!");
      }
    });
  }

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
            <FinishButton onClick={() => createUser()}>Pronto!</FinishButton>
          </>
        )}
      </ModalBox>
    </Container>
  );
}

export default Modal;
