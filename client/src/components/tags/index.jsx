import { useState } from "react";
import Menu from "../menu";
import { AddField, ContentTable } from "./styles";

function Tags() {

    const [fields, SetField] = useState([]);

    const handleAddInf = () => {
        const newInfo = [
            {
                name: 'Maria',
                description: 'Tal tal'
            },
            {
                name: 'João',
                description: 'Tal tal'
            },
        ]

        SetField(newInfo)
    }

    const deleteField = (name) => {
        const index = fields.findIndex(field => field.name === name);
        const oldField = [...fields];
        oldField.splice(index, 1);
        SetField(oldField);
    }

    return (
        <>
        <Menu/>
        <AddField onClick={handleAddInf}>
            +
        </AddField>
        <ContentTable>
                <tr>
                    <th><p className="titles">Nome</p></th>
                    <th><p className="titles">Descrição</p></th>
                </tr>
                <tr>
                    <td>
                        <p className="itens">ajuda_cliente</p>
                    </td>
                    <td>
                        <p className="itens">_________________</p>
                    </td>
                    <td>
                        <button>
                            🗑️
                        </button>
                    </td>
                </tr>
                {fields.map((field, index) => {
                        return <tr key={index}>
                                <td><p className="itens">{field.name}</p></td>
                                <td><p className="itens">{field.type}</p></td>
                                <td><p className="itens">{field.description}</p></td>
                                <td><button onClick={() => deleteField(field.name)}>🗑️</button></td>
                               </tr>
                        
                    })}
            </ContentTable>
        </>
    );
}

export default Tags;