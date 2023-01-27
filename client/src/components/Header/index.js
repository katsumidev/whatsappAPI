import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src="https://cdn.icon-icons.com/icons2/2428/PNG/512/whatsapp_black_logo_icon_147050.png"
        onClick={() => navigate("/")}
      ></img>
    </Container>
  );
}

export default Header;
