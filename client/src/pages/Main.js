import React, { useEffect, useState } from "react";
import List from "../components/List";
import { Container } from "./styles";
import { useModalContext } from "../modal.context";
import Modal from "../components/Modal";

function Main() {
  return (
    <Container>
      <List></List>
    </Container>
  );
}

export default Main;
