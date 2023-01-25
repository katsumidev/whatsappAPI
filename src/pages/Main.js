import React, { useEffect, useState } from "react";
import { Container } from "./styles";

function Main() {
  const [username, setUsername] = useState();
  const [html, setHTML] = useState("");

  const initIns = (e) => {
    if (!username) {
      return
    }
    
    fetch( // faz uma requisição para a API "cadastrando" o usuário 
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
          setTimeout(() => { // delay para a API gerar o qrcode
            fetch(`${process.env.REACT_APP_URL}/instance/qr?key=${username}`, { // quando a requisição é concluida, faz uma nova para gerar o qrcode (a api só gera qrcodes para usuários já "cadastrados")
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

  return (
    <Container>
      <form onSubmit={initIns}>
        <input
          type="text"
          name="username"
          placeholder="Seu nome.."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" className="submitButton" />
      </form>
      <img src={html} /> {/** renderiza o qr code, a partir do momento em que o qrcode for escaneado, os dados do usuário serão salvos no banco de dados */}
    </Container>
  );
}

export default Main;
