import Menu from '../menu/index'
import { ButtonSave, Container, LeftContainer, RightContainer, TextArea } from './styles';

function Welcome() {
    return (
        <>
            <Menu/>
            <Container>
                <LeftContainer>
                <label htmlFor="boas-vindas">Boas vindas:</label>
                <select name="welcome" id="welcome">
                    <option value="rembolso">Quer Rembolsar / Trocar</option>
                    <option value="saudacao">Saudação</option>
                    <option value="reagendar">Quer Reagendar</option>
                    <option value="cancelar">Quer Cancelar</option>
                    <option value="esquenta1">Esquenta chip 1</option>
                    <option value="entrgador">Entregador está a caminho</option>
                    <option value="retorno">Retorno</option>
                    <option value="naorota">Não saiu para rota</option>
                    <option value="agendado">Pedidos agendados(1)</option>
                </select>
                <label htmlFor="respostas-do-patrao" className='label'>Respostas do patrão:</label>
                <select name="welcome" id="welcome">
                    <option value="rembolso">Quer Rembolsar / Trocar</option>
                    <option value="saudacao">Saudação</option>
                    <option value="reagendar">Quer Reagendar</option>
                    <option value="cancelar">Quer Cancelar</option>
                    <option value="esquenta1">Esquenta chip 1</option>
                    <option value="entrgador">Entregador está a caminho</option>
                    <option value="retorno">Retorno</option>
                    <option value="naorota">Não saiu para rota</option>
                    <option value="agendado">Pedidos agendados(1)</option>
                </select>
                <label htmlFor="fluxo-padrão-para-midia">Fluxo Padrão Para Mídia</label>
                <select name="welcome" id="welcome">
                    <option value="rembolso">Quer Rembolsar / Trocar</option>
                    <option value="saudacao">Saudação</option>
                    <option value="reagendar">Quer Reagendar</option>
                    <option value="cancelar">Quer Cancelar</option>
                    <option value="esquenta1">Esquenta chip 1</option>
                    <option value="entrgador">Entregador está a caminho</option>
                    <option value="retorno">Retorno</option>
                    <option value="naorota">Não saiu para rota</option>
                    <option value="agendado">Pedidos agendados(1)</option>
                </select>
            </LeftContainer>
            <RightContainer>
                <h4>Horário de atendemineto</h4>
                <p>Segunda-feira: <main>19:59 - 19:59</main> </p>
                <p>terça-feira: <main>19:59 - 19:5</main> 9</p>
                <p>quarta-feira: <main>19:59 - 19:59</main> </p>
                <p>quinta-feira: <main>19:59 - 19:59</main> </p>
                <p>sexta-feira: <main>19:59 - 19:59</main></p>
                <p>sabado-feira: <main>19:59 - 19:59</main></p>
                <p>domingo-feira: <main></main> </p>
                <p>domingo-feira: <main></main></p>
                <h5>Texto a cada 3 botões</h5>
                <TextArea />
                <ButtonSave>
                    Salvar
                </ButtonSave>
            </RightContainer>
            </Container>
            
        </>
    );
}

export default Welcome;