import { useState } from "react";
import Menu from "../menu";
import { AddField, ContentTable, ShowAdm } from "./styles";

function Admin() {

    const [fields, SetField] = useState([]);

    const handleAddInf = () => {
        const newInfo = [
            {
                name: 'Maria',
                controls: true,
                audience: false,
                campany: true,
                trasmition: false,
                automation: false,
                flow: true,
                configs: false,
                chat: true
            },
            {
                name: 'José',
                controls: false,
                audience: false,
                campany: true,
                trasmition: true,
                automation: true,
                flow: true,
                configs: false,
                chat: true
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
            <ShowAdm>
                <input type="checkbox" name="show_adm" id="show_adm" /> 
                <p>Mostrar o nome do admin (atendente) nas mensagens enviadas pelo Bate Papo?</p>
            </ShowAdm>
            <ContentTable>
                <tr>
                    <th><p className="titles">Nome</p></th>
                    <th><p className="titles">Paines de controle</p></th>
                    <th><p className="titles">Audiência</p></th>
                    <th><p className="titles">Campanhas</p></th>
                    <th><p className="titles">Transmissão</p></th>
                    <th><p className="titles">Automação</p></th>
                    <th><p className="titles">Fluxo de conversas</p></th>
                    <th><p className="titles">Configurações</p></th>
                    <th><p className="titles">Bate-papo ao vivo</p></th>
                </tr>
                <tr>
                    <td>
                        <p className="itens">Jõao</p>
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="controls" id="controls" />
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="audience" id="audience" />
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="campany" id="campany" />
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="transmition" id="transmition" />
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="automation" id="automation" />
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="flow" id="flow" />
                    </td>
                    <td>
                        <input className="check_box" type="checkbox" name="config" id="config" />
                    </td>
                    <td>
                        <input className="last_box" type="checkbox" name="chat" id="chat" />
                    </td>
                    <td>
                        <button>
                            🗑️
                        </button>
                    </td>
                </tr>
                {
                fields.map((field, index) => {
                        return <tr key={index}>
                                <td><p className="itens">{field.name}</p></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.controls ? true : false} /></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.audience ? true : false} /></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.campany ? true : false} /></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.trasmition ? true : false} /></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.automation ? true : false} /></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.flow ? true : false} /></td>
                                <td><input type="checkbox" className="check_box" name="controls" id="controls" checked={field.configs ? true : false} /></td>
                                <td><input type="checkbox" className="last_box" name="controls" id="controls" checked={field.chat ? true : false} /></td>
                                <td><button onClick={() => deleteField(field.name)}>🗑️</button></td>
                               </tr>
                        
                    })}
            </ContentTable>
        </>
    );
}

export default Admin;