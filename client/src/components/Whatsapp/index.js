import {
  LeftContent,
  LoggoutButton,
  RightContent,
  ServerContainer,
  ServerStatusOff,
  ServerStatusOn,
  WhatsAppNumber,
} from "./style";
import Menu from "../Menu";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function WhatsApp() {
  const [status, setStatus] = useState(true); // Status se o whats está conectado
  const [whatsappConnected, setWhatsappConnected] = useState(556283214457); // Número conectado
  const { userIns } = useParams(); //Informção do usuário para busca no banco

  useEffect(() => {
    /* 
        Verifica na API se está conectado
        Se estivar seta no state e renderiza condicionalmente
        Vai usar todos os states acima para renderização condicional
        */
  }, []);

  return (
    <>
      <Menu />
      <ServerContainer>
        <LeftContent>
          <p>Status do servidor:</p>
          {status ? (
            <ServerStatusOn>
              <p className="status">Ativo</p>
            </ServerStatusOn>
          ) : (
            <ServerStatusOff>
              <p className="status">Desativado</p>
            </ServerStatusOff>
          )}
        </LeftContent>

        <RightContent>
          {status ? (
            <>
              <p>
                Parabéns! Seu WhatsApp conectou com sucesso! <br />
                Agora, você pode até desligar seu celular e computador <br />
                que o bot continuará funcionando. <br />
                Acesse seu WhatsApp pelo celular no mínimo a cada 14 dias <br />
                para confirmação da posse do número.
              </p>
              <br />
              <p className="whats_phone">WhatsApp conectado:</p>
              <WhatsAppNumber>
                <p className="whats_phone">{whatsappConnected}</p>
              </WhatsAppNumber>
              <LoggoutButton>Sair</LoggoutButton>
            </>
          ) : (
            <>
              <p>Whatsapp não conectado</p>
              <br />
              <LoggoutButton>Conectar</LoggoutButton>
            </>
          )}
        </RightContent>
      </ServerContainer>
    </>
  );
}

export default WhatsApp;
