import { NodeResizer } from "@reactflow/node-resizer";
import React from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { BsWhatsapp } from "../../../styles/Icons";
import {
  Container,
  Header,
  WhatsappLogo,
  Text,
  MiniChat,
  Message,
  ContentDiv,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/nodeSlice";
import { CiImageOn } from "react-icons/ci";
import { RxVideo } from "react-icons/rx";
import { FiFile } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ContetntSquare = ({ selected, data, id }) => {
  const dispatch = useDispatch();

  if (selected) {
    dispatch(changeNode({ id, type: "content" }));
  } else {
    dispatch(undoChange());
  }

  return (
    <Container /* onClick={handleClick} */>
      <Header>
        <WhatsappLogo>
          <BsWhatsapp size={25} fill="#FFF" />
        </WhatsappLogo>
        <Text>
          <p>enviar whatsapp</p>
          <sub>Conteúdo</sub>
        </Text>
      </Header>
      <MiniChat className="text-center mt-6">
        <Message>
          {data.range ? (
            <>
              {data.range.map((con) => {
                return (
                  <ContentDiv>
                    <p>Digintando em {con.value} seg...</p>
                  </ContentDiv>
                );
              })}
            </>
          ) : (
            <div></div>
          )}
          {data.image ? (
            <>
              {data.image.map((img) => {
                return (
                  <ContentDiv>
                    <p style={{ textAlign: "center" }}>
                      Imagem
                      <CiImageOn />
                    </p>
                  </ContentDiv>
                );
              })}
            </>
          ) : (
            <></>
          )}
          {data.video ? (
            <>
              {data.video.map((conn) => {
                return (
                  <ContentDiv>
                    <p>
                      Video Salvo
                      <RxVideo />
                    </p>
                  </ContentDiv>
                );
              })}
            </>
          ) : (
            <></>
          )}
          {data.file ? (
            <>
              {data.file.map((conn) => {
                return (
                  <ContentDiv>
                    <p>
                      Arquivo Salvo
                      <FiFile />
                    </p>
                  </ContentDiv>
                );
              })}
            </>
          ) : (
            <></>
          )}
          {data.audio ? (
            <>
              {data.audio.map((conn) => {
                return (
                  <ContentDiv>
                    <p>
                      Auidio Salvo
                      <MdOutlineKeyboardVoice />
                    </p>
                  </ContentDiv>
                );
              })}
            </>
          ) : (
            <></>
          )}
          {data.text ? (
            <>
              {data.text.map((conn) => {
                return (
                    <p>{conn.value}</p>
                );
              })}
            </>
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
        {data.textArea}
      </MiniChat>
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        lineClassName="border-blue-400"
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

export default ContetntSquare;
