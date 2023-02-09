import React, { useEffect, useState } from "react";
import {
  Container,
  MessageInput,
  SendMsgBtn,
  FirstColumn,
  SecondColumn,
  ContactNameInput,
  ContactList,
  ContactRow,
  ContactColumn,
  ProfilePicture,
  DeleteContactBtn,
  ContactInfo,
  ContactOptions,
  Main,
  ImportContacts,
} from "./styles";
import InputMask from "react-input-mask";
import CheckboxGroup from "react-checkbox-group";
import { convertToPhone } from "../../utils/conversions";
import defaultPic from "../../assets/defaultPic.jpg";
import * as XLSX from "xlsx";
import "../../assets/dist/css/adminlte.min.css";
import "../../assets/dist/css/style.css";
import "../../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "../../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "../../assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";
import { useParams } from "react-router";
import {
  getInfo,
  getContacts,
  addNewContact,
  deleteUserContact,
  sendSingleMessage,
  sendMultipleMessages,
} from "../../services/api";

function UserPanel() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [contactNumber, setContactNumber] = useState(0);
  const [contactName, setContactName] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const { userIns } = useParams();

  useEffect(() => {
    // pega o nome do usuário
    const getUserInfo = async () => {
      let data = await getInfo({ key: userIns });
      setUsername(data.data.instance_data.user.name);
    };
    getUserInfo();
  });

  useEffect(() => {
    // pega os contatos do usuário
    const loadContacts = async () => {
      let data = await getContacts({
        user_token: localStorage.getItem("userToken"),
      });
      setContacts(data.data);
    };
    loadContacts();
  }, []);

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
      {/* <!-- Site wrapper --> */}
      <div className="wrapper">
        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2 d-flex align-items-center">
                <div className="col-sm-6">
                  <h1>Audiência</h1>
                </div>
                <div className="col-sm-2">
                  <a className="button-up btn btn-primary btn-sm btn-block">
                    <i className="fa-solid fa-upload"></i>&nbsp;Importar
                  </a>
                </div>
                <div className="col-sm-2">
                  <a className="button-up btn btn-primary btn-sm btn-block">
                    <i className="fa-solid fa-download"></i>&nbsp;Relatório
                  </a>
                </div>
                <div className="col-sm-2">
                  <a className="button-up btn btn-primary btn-sm btn-block">
                    <i className="fa-solid fa-circle-user"></i>&nbsp;Novo
                    contato
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="d-flex">
            <div className="col-3 scroll-div">
              <div>
                <table className="table table-borderless" cellpadding="2px">
                  <thead>
                    <tr>
                      <th scope="col">Etiquetas</th>
                      <th className="font-weight-normal text-right cor-cinza">
                        Contatos
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cor-cinza">camisa_seleção</td>
                      <td className="text-right cor-cinza">645</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <a className="ver-link" href="#">
                    Ver Tudo
                  </a>
                </div>
              </div>
              <div>
                <table className="table table-borderless" cellpadding="2px">
                  <thead>
                    <tr>
                      <th scope="col">Sequências</th>
                      <th className="font-weight-normal text-right cor-cinza">
                        Contatos
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cor-cinza">Retorno 3 Horas depois</td>
                      <td className="text-right cor-cinza">0</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <a className="ver-link" href="#">
                    Ver Tudo
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <table className="table table-borderless" cellpadding="2px">
                    <thead>
                      <tr>
                        <th scope="col">Camapanhas</th>
                        <th className="font-weight-normal text-right cor-cinza">
                          Contatos
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="cor-cinza">Imóvel Rua XYZ</td>
                        <td className="text-right cor-cinza">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex justify-content-end align-items-center">
                <div className="col-sm-3 justify-content-end">
                  <a className="button-up btn btn-primary btn-md btn-block">
                    Filtro
                  </a>
                </div>
                <div className="col-sm-5 input-group flex-nowrap">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text button-buscar"
                      id="addon-wrapping"
                    >
                      <i className="fa-solid fa-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control button-buscar"
                    placeholder="Buscar"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div className="my-4">
                <table id="example2" className="table">
                  <thead>
                    <tr>
                      <th className="text-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input custom-control-input-success"
                            type="checkbox"
                            id="customCheckbox1"
                          />
                          <label
                            for="customCheckbox1"
                            className="custom-control-label"
                          ></label>
                        </div>
                      </th>
                      <th className="text-center" scope="col">
                        #
                      </th>
                      <th scope="col">Nome</th>
                      <th scope="col">N° WhatsApp</th>
                      <th scope="col">Inscrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CheckboxGroup
                      name="numbers"
                      value={numbers}
                      onChange={setNumbers}
                    >
                      {(Checkbox) => (
                        <>
                          {contacts.map((contact, index) => {
                            return (
                              <tr key={index}>
                                <td className="text-center">
                                  <Checkbox value={contact.number} />
                                </td>
                                <td className="text-center">
                                  <span>
                                    <ProfilePicture
                                      src={
                                        contact.pfp != null
                                          ? contact.pfp
                                          : defaultPic
                                      }
                                    ></ProfilePicture>
                                  </span>
                                </td>
                                <td className="id-nome">{contact.contact}</td>
                                <td>{convertToPhone(contact.number)}</td>
                                <td className="inscrito">03/02/2023, 17:43</td>
                              </tr>
                            );
                          })}
                        </>
                      )}
                    </CheckboxGroup>
                  </tbody>
                </table>
              </div>
              {/* <!-- <div className="d-flex justify-content-center mb-3"> */}
              <a
                className="button-up btn btn-primary btn-md btn-block"
                style={{ width: "30%" }}
              >
                Carregar mais
              </a>
            </div>
          </section>
        </div>
      </div>
      {/* <!-- ./wrapper --> */}
    </Container>
  );
}

export default UserPanel;
