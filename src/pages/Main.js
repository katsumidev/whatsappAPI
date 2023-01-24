import React, { useEffect, useState } from "react";
import { Container } from "./styles";

function Main() {
  const [username, setUsername] = useState();
  const [html, setHTML] = useState({ __html: "" });

  useEffect(() => {
    console.log(username);
  }, [username]);

  const initIns = (e) => {
    fetch(
      `${process.env.REAC_APP_URL}/instance/init?token=${process.env.REACT_APP_SECRET_TOKEN}&key=${username}`,
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
          alert("Usuário criado com sucesso, por favor leia o QR code!!");
          fetch(`${process.env.REACT_APP_URL}/instance/qr?key=${username}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }).then(async (res) => {
            if (res === 200) {
              console.log("operação realizada");
              setHTML(res.text());
            }
          });
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div dangerouslySetInnerHTML={html} />
    </Container>
  );
}

export default Main;
