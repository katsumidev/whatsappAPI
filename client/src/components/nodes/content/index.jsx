import { NodeResizer } from "@reactflow/node-resizer";
import React, { useCallback, useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { BiBookContent } from "react-icons/bi";
import { BsWhatsapp } from "../../../styles/Icons";
import {
  Container,
  H1,
  Header,
  WhatsappLogo,
  Text,
  MiniChat,
  Message,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/nodeSlice";
import { CiImageOn } from "react-icons/ci";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ContetntSquare = ({ selected, data, id }) => {
  const [typingDelay, setTypingDelay] = useState(data.range);
  const [images, setImages] = useState(data.image);
  const [videos, setVideos] = useState(data.video);
  const [files, setFiles] = useState(data.file);
  const [audios, setAudios] = useState(data.audio);
  const [text, setText] = useState(data.text);
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
        {data.range === undefined ? (
          <></>
        ) : (
          <div>
            {typingDelay.map((con) => {
              return (
                <MessageContainer>
                  <p>Digintando em {con.value}</p>
                </MessageContainer>
              );
            })}
          </div>
        )}
        {data.image === undefined ? (
          <></>
        ) : (
          <>
            {images.map((img) => {
              return <MessageContainer>Imagem</MessageContainer>;
            })}
          </>
        )}
        {data.video === undefined ? (
          <></>
        ) : (
          <>
            {videos.map((conn) => {
              return (
                <MessageContainer>
                  <p>Video Salvo</p>
                </MessageContainer>
              );
            })}
          </>
        )}
        {data.file === undefined ? (
          <></>
        ) : (
          <>
            {files.map((conn) => {
              return (
                <MessageContainer>
                  <p>Arquivo Salvo</p>
                </MessageContainer>
              );
            })}
          </>
        )}
        {data.audio === undefined ? (
          <></>
        ) : (
          <>
            {audios.map((conn) => {
              return (
                <MessageContainer>
                  <p>Auidio Salvo</p>
                </MessageContainer>
              );
            })}
          </>
        )}
        {data.text === undefined ? (
          <></>
        ) : (
          <>
            {text.map((conn) => {
              return (
                <MessageContainer>
                  <p>{conn.value}</p>
                </MessageContainer>
              );
            })}
          </>
        )}
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

export const MessageContainer = ({children}) => {
  return (
    <Message>
      {children}
      <sub>
        {new Date().toLocaleTimeString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
        })}
      </sub>
    </Message>
  );
};

export default ContetntSquare;