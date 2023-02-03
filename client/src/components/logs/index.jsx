import Menu from '../menu/index'
import { Log, SelectTop } from './styles';

function Logs() {
    return (
        <>
        <Menu />
        <SelectTop>
            <select name="logs" id="logs">
                <option value="todos">Todos</option>
                <option value="erro">Erro</option>
                <option value="sucesso">Sucesso</option>
            </select>
        </SelectTop>
        <Log>
            <p>Tudo bem por aqui! Nada de erro, nem avisos!</p>
        </Log>
    </>
    );
}

export default Logs;