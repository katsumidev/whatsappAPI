import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  ProfilePicture,
} from "./styles";
import ReactPaginate from "react-paginate";
import CheckboxGroup from "react-checkbox-group";
import { convertToFullDate, convertToPhone } from "../../utils/conversions";
import { useModalContext } from "../../modal.context";
import * as XLSX from "xlsx";
import defaultPic from "../../assets/defaultPic.jpg";
import "../../assets/dist/css/adminlte.min.css";
import "../../assets/dist/css/style.css";
import "../../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "../../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "../../assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";
import { useParams } from "react-router";
import { getContacts } from "../../services/api";
import {
  AiOutlineDownload,
  AiOutlineUpload,
  IoMdContact,
  BiSearchAlt,
  MdArrowForwardIos,
} from "../../styles/Icons";
import NewUserModal from "../../components/NewUserModal";
import { addNewContact } from "../../services/api";

function UserPanel() {
  const [contacts, setContacts] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const { userIns } = useParams();
  const fileinput = useRef(null);

  const endOffset = itemOffset + 8;
  const currentItems = contacts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(contacts.length / 8);

  const handlePageClick = (event) => {
    // paginação da data-table
    const newOffset = (event.selected * 8) % contacts.length;
    setItemOffset(newOffset);
  };

  const {
    modalState: { visible },
    openModal,
  } = useModalContext();

  useEffect(() => {
    // pega os contatos do usuário
    const loadContacts = async () => {
      let data = await getContacts({
        userToken: localStorage.getItem("userToken"),
      });
      setContacts(data.data);
    };
    loadContacts();
  }, []);

  useEffect(() => {}, [searchBox]);

  const handleFileChange = async (event) => {
    // responsavel pela função de importação de contatos através de um arquivo excel.
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

        window.location.reload(false);
      } catch (error) {
        console.log("erro de importação");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Container>
      {visible ? <NewUserModal /> : <></>}
      <input
        type="file"
        accept=".xlsx"
        ref={fileinput}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
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
                  <a
                    className="button-up btn btn-primary btn-sm btn-block"
                    onClick={() => fileinput.current.click()}
                  >
                    <AiOutlineUpload size={20} /> &nbsp;Importar Contatos
                  </a>
                </div>
                <div className="col-sm-2">
                  <a className="button-up btn btn-primary btn-sm btn-block">
                    <AiOutlineDownload size={20} />
                    &nbsp;Relatório
                  </a>
                </div>
                <div className="col-sm-2">
                  <a
                    className="button-up btn btn-primary btn-sm btn-block"
                    onClick={() => openModal()}
                  >
                    <IoMdContact size={20} />
                    &nbsp;Novo contato
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="hr-divider"></div>
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
                      <BiSearchAlt size={20} />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control button-buscar"
                    placeholder="Buscar"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    onChange={(e) => setSearchBox(e.target.value)}
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
                          {searchBox !== ""
                            ? contacts
                                .filter((contact) =>
                                  contact.contact
                                    ?.toLowerCase()
                                    .includes(searchBox?.toLowerCase())
                                )
                                .map((contact, index) => {
                                  return (
                                    <tr key={index}>
                                      <td className="text-center">
                                        <Checkbox value={contact.number} />
                                      </td>
                                      <td className="text-center">
                                        <span>
                                          <ProfilePicture
                                            src={
                                              contact.pfp !== null
                                                ? contact.pfp
                                                : defaultPic
                                            }
                                            onError={({ currentTarget }) => {
                                              currentTarget.onerror = null;
                                              currentTarget.src = defaultPic;
                                            }}
                                          ></ProfilePicture>
                                        </span>
                                      </td>
                                      <td className="id-nome">
                                        {contact.contact}
                                      </td>
                                      <td>{convertToPhone(contact.number)}</td>
                                      <td className="inscrito">
                                        {convertToFullDate(contact.date)}
                                      </td>
                                    </tr>
                                  );
                                })
                            : currentItems.map((contact, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="text-center">
                                      <Checkbox value={contact.number} />
                                    </td>
                                    <td className="text-center">
                                      <span>
                                        <ProfilePicture
                                          src={
                                            contact.pfp !== null
                                              ? contact.pfp
                                              : defaultPic
                                          }
                                          onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = defaultPic;
                                          }}
                                        ></ProfilePicture>
                                      </span>
                                    </td>
                                    <td className="id-nome">
                                      {contact.contact}
                                    </td>
                                    <td>{convertToPhone(contact.number)}</td>
                                    <td className="inscrito">
                                      {convertToFullDate(contact.date)}
                                    </td>
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
              <ReactPaginate
                breakLabel="..."
                nextLabel={<MdArrowForwardIos />}
                className="react-paginate"
                onPageChange={handlePageClick}
                pageRangeDisplayed={8}
                pageCount={pageCount}
                activeClassName="active-page"
                previousLabel={<MdArrowForwardIos className="back" />}
                renderOnZeroPageCount={null}
              />
            </div>
          </section>
        </div>
      </div>
      {/* <!-- ./wrapper --> */}
    </Container>
  );
}

export default UserPanel;
