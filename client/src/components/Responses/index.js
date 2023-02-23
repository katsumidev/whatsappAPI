import { useState } from "react";
import Menu from "../Menu";
import { AddField, ContentTable } from "./styles";

function Responses() {
  const [fields, SetField] = useState([]);
  const [edit, setEdit] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [textarea, setTextArea] = useState("");

  /*
    Se aparecer o bug de atualizar mutiplos campos se liga na dica do chatgpt
    vai tá no arquivo helpe.txt :)
    */
  const handleAddInf = () => {
    const newInfo = [
      {
        name: "Trocar agenda",
        text: "Troca Agendada, confere por favor, você receberá uma mensagem no whatsApp para confirmar sua entrega. ok?",
      },
    ];

    SetField(newInfo);
  };

  const editField = (condition) => {
    setEdit(condition);
  };

  const deleteField = (name) => {
    const index = fields.findIndex((field) => field.name === name);
    const oldField = [...fields];
    oldField.splice(index, 1);
    SetField(oldField);
  };
  return (
    <>
      <Menu />
      <AddField onClick={handleAddInf}>+</AddField>
      <ContentTable>
        <tr>
          <th>
            <p className="titles">Nome</p>
          </th>
          <th>
            <p className="titles">Resposta Rapida</p>
          </th>
        </tr>
        <tr>
          <td>
            <p className="itens">ajuda_cliente</p>
          </td>
          <td>
            <textarea
              className="replies-items"
              name="fast-response"
              id="fast-response"
              cols="30"
              rows="10"
            />
          </td>
          <td>
            <button>🗑️</button>
          </td>
        </tr>
        {fields.map((field, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  className="itens"
                  type="text"
                  value={inputValue || field.name}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={edit ? true : false}
                />
              </td>
              <td>
                <textarea
                  className="replies-items"
                  value={textarea || field.text}
                  disabled={edit ? true : false}
                  onChange={(e) => setTextArea(e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => editField(false)}>✏️</button>
              </td>
              <td>
                <button onClick={() => deleteField(field.name)}>🗑️</button>
              </td>
            </tr>
          );
        })}
      </ContentTable>
    </>
  );
}

export default Responses;
