import React, { useState } from "react";
import { useModalContext } from "../../modal.context";
import {
  Container,
  Background,
  ModalBox,
  ContactNameInput,
  SaveContactBtn,
  ContactEmailInput,
} from "./styles";
import InputMask from "react-input-mask";
import { useParams } from "react-router";
import { addNewContact } from "../../services/api";
import { AiOutlineInfoCircle } from "../../styles/Icons";

function NewUserModal() {
  const [contactNumber, setContactNumber] = useState(0);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const { userIns } = useParams();

  const {
    modalState: { message, visible },
    closeModal,
  } = useModalContext();

  const addContact = async (e) => {
    // adiciona um novo contato
    if (contactNumber > 0 && contactName != "") {
      let data = await addNewContact({
        phone_number: contactNumber,
        contact_name: contactName,
        user_token: localStorage.getItem("userToken"),
        user_id: userIns,
        email: contactEmail,
      });
      window.location.reload(false);
    } else {
      alert("preencha os campos");
      e.preventDefault();
      closeModal();
    }
  };

  return (
    <Container>
      <Background onClick={() => closeModal()} />
      <ModalBox>
        <h4>Criar Usuário</h4>
        <div className="hr"></div>
        <small>
          É preciso informar um número de telefone para criar um contato
        </small>
        <form onSubmit={addContact}>
          <ContactNameInput
            type="text"
            placeholder="Nome do contato.."
            onChange={(e) => setContactName(e.target.value)}
          />
          <small className="numberInfo">
            <AiOutlineInfoCircle size={15} />
            Números brasileiros com DDD maior que 28 possuem apenas 8 dígitos no
            WhatsApp
          </small>
          <InputMask
            mask="+99 (99) 9999-9999"
            placeholder="+__ ( ) ____-____"
            onChange={(e) =>
              setContactNumber(e.target.value.replace(/[\W_]/g, ""))
            }
          />
          <ContactEmailInput
            type="email"
            placeholder="Email.."
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <SaveContactBtn type="submit" value="Enviar" />
        </form>
      </ModalBox>
    </Container>
  );
}

export default NewUserModal;
