import Menu from "../menu";
import { AddField, ContentTable, HeaderContainer, SelectField, SelectFieldContainer } from "./styles";

function Fields() {
    return(
        <>
            <Menu/>
            <HeaderContainer>
                <SelectFieldContainer>
                    <SelectField>
                        <p>Campos do Usuário</p>
                    </SelectField>
                    <SelectField>
                        <p>Campos do Robô</p>
                    </SelectField>
                </SelectFieldContainer>
                <AddField>
                    +
                </AddField>
            </HeaderContainer>
            <ContentTable>
                <tr>
                    <th><p className="titles">Nome</p></th>
                    <th><p className="titles">Tipo</p></th>
                    <th><p className="titles">Descrição</p></th>
                </tr>
                <tr>
                    <td>
                        <p className="itens">ajuda_cliente</p>
                    </td>
                    <td>
                        <p className="itens">texto</p>
                    </td>
                    <td>
                        <p className="itens">_________________</p>
                    </td>
                </tr>
            </ContentTable>
        </>
    )
}

export default Fields;