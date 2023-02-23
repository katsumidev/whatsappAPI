import { useState } from "react";
import Menu from "../Menu";
import { AddField, ContentTable } from "./styles";
import { useParams } from "react-router";

function Tags() {
  const [fields, SetField] = useState([]);
  const [edit, setEdit] = useState(true);
  const [inputValue, setInputValue] = useState({});
  const { userIns } = useParams();

  /*
    Se aparecer o bug de atualizar mutiplos campos se liga na dica do chatgpt
    vai tá no arquivo helpe.txt :)
    */
  const handleAddInf = () => {
    const newInfo = [
      {
        name: "Maria",
        description: "Tal tal",
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
            <p className="titles">Descrição</p>
          </th>
        </tr>
        <tr></tr>
        {fields.map((field, index) => {
          return (
            <tr key={index}>
              <td>
                <input
                  className="itens"
                  type="text"
                  value={inputValue[field.name] || field.name}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      [field.name]: e.target.value,
                    })
                  }
                  disabled={edit ? true : false}
                />
              </td>
              <td>
                <p className="itens">{field.type}</p>
              </td>
              <td>
                <p className="itens">{field.description}</p>
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

export default Tags;
