import { Children, useState } from "react";
import { CloseModal, Container, Content, ModalForm } from "./styles";

function FieldsModal({ children }) {
  /*<button onClick={() => setIsModalVisibleForm(true)}>Open</button>
            {isModalVisibleForm ? <h1>Modal</h1>: null} */
  return (
    <ModalForm>
      <Container>
        <CloseModal></CloseModal>
        <Content>{Children}</Content>
      </Container>
    </ModalForm>
  );
}

export default FieldsModal;
