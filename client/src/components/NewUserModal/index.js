import React, { useState, useEffect } from "react";
import { useModalContext } from "../../modal.context";
import {
  Container,
  Background,
  ModalBox,
  ContactNameInput,
  SaveContactBtn,
} from "./styles";
import InputMask from "react-input-mask";
import { convertToPhone } from "../../utils/conversions";
import * as XLSX from "xlsx";
import { useParams } from "react-router";
import {
  addNewContact,
  deleteUserContact,
  sendSingleMessage,
  sendMultipleMessages,
} from "../../services/api";
import {AiOutlineInfoCircle} from "../../styles/Icons";

function NewUserModal() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [contactNumber, setContactNumber] = useState(0);
  const [contactName, setContactName] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const { userIns } = useParams();

  const {
    modalState: { message, visible },
    closeModal,
  } = useModalContext();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firtSheet = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firtSheet];
      const array = XLSX.utils.sheet_to_json(worksheet);
      try {
        array.map(async (files) => {
          console.log(
            `numero: ${files.telefone}, sobrenome: ${files.sobrenome}`
          );
          await addNewContact({
            phone_number: files.telefone,
            contact_name: files.sobrenome,
            user_token: localStorage.getItem("userToken"),
            user_id: userIns,
          });
        });
        console.log("Salvo com sucesso");
      } catch (error) {
        alert("Erro ao importar");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const addContact = async (e) => {
    // adiciona um novo contato
    if (contactNumber > 0 && contactName != "") {
      let data = await addNewContact({
        phone_number: contactNumber,
        contact_name: contactName,
        user_token: localStorage.getItem("userToken"),
        user_id: userIns,
      });
      window.location.reload(false);
    } else {
      alert("preencha os campos");
      e.preventDefault();
      closeModal();
    }
  };

  const deleteContact = async (number) => {
    // deleta o contato do usuário
    let data = await deleteUserContact({
      phone_number: number,
      user_token: localStorage.getItem("userToken"),
    });

    window.location.reload(false);
  };

  const sendMsg = async (e) => {
    // enviar mensagens automática através do painel de usuário
    if (numbers.length > 1) {
      await sendMultipleMessages({
        user_id: userIns,
        number_list: numbers,
        msg: msg,
      });
    } else {
      await sendSingleMessage({
        user_id: userIns,
        phone_number: numbers[0],
        msg: msg,
      });
    }

    e.preventDefault();
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
          <SaveContactBtn type="submit" value="Enviar" />
        </form>
      </ModalBox>
    </Container>
  );
}

export default NewUserModal;
