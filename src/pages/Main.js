import React, { useState } from "react";
import { Container } from "./styles";

function Main() {
  const [username, setUsername] = useState();

  const initIns = (e) => {
    fetch(
      `${process.env.APP_URL}/instance/init?token=${process.env.APP_SECRET_TOKEN}&key=${username}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then(async(res) => {
        switch (res.status){
            case 200:
                alert("Usuário criado com sucesso, por favor leia o QR code!!")
                fetch(`${process.env.APP_URL}`)
                break;
        }
    });

    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={() => initIns}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default Main;
