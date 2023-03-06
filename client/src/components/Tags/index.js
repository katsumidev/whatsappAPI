import { useEffect, useState } from "react";
import Menu from "../Menu";
import { AddField, ContentTable } from "./styles";
import { useParams } from "react-router";
import { createTagForUser, deleteTagForUser, getAllTags, updateTagsForUser } from "../../services/api";

function Tags() {
  const [fields, SetField] = useState([]);
  const [edit, setEdit] = useState(false); // estado que indica se a tag está em modo de edição
  const [editedTag, setEditedTag] = useState(null); // estado que guarda a tag que está em edição
  const [inputValue, setInputValue] = useState(""); // estado que guarda o valor do input da tag em edição
  const [textAreaValue, setTextAreaValue] = useState("");
  const [showAddField, setShowAddField] = useState(false);
  const [newInput, setNewInput] = useState("");
  const [newTextArea, setNewTextArea] = useState("")

  const [tags, setTags] = useState([])
  const { userIns } = useParams();

  const userToken = localStorage.getItem('userToken')

  useEffect(() => {
    const getAllTagsForUser = async () => {
      const tags = await getAllTags(userToken);
      setTags(tags)
      tags.map((ta) => {
        ta.tags.map((t) => {
        console.log(`tags ${JSON.stringify(t.name)}`)
        })
      })
    }
    getAllTagsForUser()
  }, [])


  const editTag = (tag) => {
    setEdit(true);
    setEditedTag(tag);
    setInputValue(tag.name);
    setTextAreaValue(tag.description);
  };
  
  const cancelEdit = () => {
    setEdit(false);
    setEditedTag(null);
    setInputValue("");
    setTextAreaValue("");
  };
  
  const saveTag = async (tag) => {
    const updatedTag = { ...tag, name: inputValue, description: textAreaValue };
    const updatedTags = tags.map((t) => {
      if (t === tag) {
        return updatedTag;
      } else {
        return t;
      }
    });
    setTags(updatedTags);
    setEdit(false);
    setEditedTag(null);
    setInputValue("");
    setTextAreaValue("");

    await updateTagsForUser(userToken, updatedTag).then(() => window.location.reload(false))
  };

  const handleAddField = () => {
    setShowAddField(true);
  };

  const handleConfirmNewFiel = async () => {
    await createTagForUser(
      userToken, 
      {
        name: newInput, 
        description: newTextArea
      }).then(() => window.location.reload(false))
    setShowAddField(false)
  }

  const handleDelteTag = async (name, description) => {
    await deleteTagForUser(
      userToken, 
      {
        name, description
      }).then(() => window.location.reload(false))
  }
  

  return (
    <>
      <Menu />
      <AddField onClick={handleAddField}>+</AddField>
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
        {tags.map((tag) => {
          return tag.tags.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="itens"
                  type="text"
                  value={item === editedTag ? inputValue : item.name}
                  disabled={!edit || item !== editedTag}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </td>
              <td>
                <textarea 
                  value={item === editedTag ? textAreaValue : item.description}
                  disabled={!edit || item !== editedTag}
                  onChange={(e) => setTextAreaValue(e.target.value)}
                />
              </td>
              <td>
                {item === editedTag ? (
                  <>
                    <button onClick={() => saveTag(item)}>Salvar</button>
                    <button onClick={() => cancelEdit()}>Cancelar</button>
                  </>
                ) : (
                  <>
                  <button onClick={() => editTag(item)}>✏️</button>
                  <button onClick={() => handleDelteTag(item.name, item.description)}>🗑️</button>

                  </>
                )}
              </td>
              <td>
              </td>
            </tr>
          ))
        })}
        {showAddField && (
          <tr>
            <td>
              <input type="text" placeholder="Nome" value={newInput} onChange={(e) => setNewInput(e.target.value)}/>
            </td>
            <td>
              <textarea placeholder="Descrição" value={newTextArea} onChange={(e) => setNewTextArea(e.target.value)} />
            </td>
            <td>
              <button onClick={handleConfirmNewFiel}>Salvar</button>
              <button onClick={() => setShowAddField(false)}>Cancelar</button>
            </td>
          </tr>
        )}
      </ContentTable>
    </>
  );
}

export default Tags;
