import { GrCircleAlert } from "react-icons/gr";
import { RightContent, ServerContainer, ServerStatus } from "./style";
import Menu from "../menu";

function WhatsApp() {
    return (
        <>
        <Menu/>
            <ServerContainer>
                Status do servidor:
                <ServerStatus>
                    <p className='status'>Ativo</p>
                </ServerStatus>
                <RightContent>
                    <p>
                    Parabéns! Seu WhatsApp conectou com sucesso! <br />
                    Agora, você pode até desligar seu celular e computador <br /> 
                    que o bot continuará funcionando. <br />
                    Acesse seu WhatsApp pelo celular no mínimo a cada 14 dias <br />
                    para confirmação da posse do número. <br />
                    </p>
                    <GrCircleAlert className='icon' />
                </RightContent>
            </ServerContainer>
        </>
    );
}

export default WhatsApp;