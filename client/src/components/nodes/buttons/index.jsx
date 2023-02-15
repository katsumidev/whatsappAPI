import { NodeResizer } from "@reactflow/node-resizer";
import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { AiFillAlert } from "react-icons/ai";
import { BsWhatsapp } from "../../../styles/Icons";
import {
  Container,
  H1,
  WhatsappLogo,
  Header,
  Text,
  MiniChat,
  Message,
  ButtonMessage,
  Buttons,
  HandleBtns,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/nodeSlice";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ButtonSquare = ({ selected, data }) => {
  const [text, setText] = useState(data.textAreaB)
  const [answers, setAnswers] = useState(data.answers)
  const dispatch = useDispatch();

  console.log(`Respostas: ${answers}`)

  if (selected) {
    dispatch(changeNode({ data, type: "button" }));
  } else {
    dispatch(undoChange());
  }

  return (
    <Container>
      <Header>
        <WhatsappLogo>
          <BsWhatsapp size={25} fill="#FFF" />
        </WhatsappLogo>
        <Text>
          <p>enviar whatsapp</p>
          <sub>Botões</sub>
        </Text>
      </Header>
      <MiniChat className="text-center mt-6">
        <Message>
          Texto da pergunta:
          {answers ? (
             <p><b>{answers}</b></p>
          ) : (
           <></>
          )}
          <sub>
            {new Date().toLocaleTimeString("pt-BR", {
              hour: "numeric",
              minute: "numeric",
            })}
          </sub>
        </Message>
        {data.textAreaB ? (
          <>
            {text.map((con) => {
              return (
                <ButtonMessage>{con.value}</ButtonMessage>
              )
            })}
          </>
        ): (
          <ButtonMessage>Número de pedido</ButtonMessage>
        )}
        {data.textArea}
      </MiniChat>
      <Buttons>
        <HandleBtns>
          Número do pedido
          <Handle
            id="right"
            type="source"
            position={Position.Right}
          />
        </HandleBtns>
        <HandleBtns parent>
          Email
          <Handle
            id="right"
            type="source"
            position={Position.Right}
          />
        </HandleBtns>
      </Buttons>
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="bootom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />
    </Container>
  );
};

export default ButtonSquare;
