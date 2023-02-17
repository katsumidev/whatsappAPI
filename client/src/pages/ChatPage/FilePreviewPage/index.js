import React, { useState } from "react";
import {
  Container,
  ImageOptions,
  DocumentViewer,
  AudioPreviewContainer,
  Image,
  SendOptions,
  Caption,
  MessageBtn,
} from "./styles";
import {
  IoClose,
  AiFillFileZip,
  BsFillFileEarmarkMusicFill,
} from "../../../styles/Icons";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function FilePreviewPage(props) {
  const [caption, setCaption] = useState("");

  return (
    <Container>
      <ImageOptions>
        <IoClose
          size={25}
          style={{ color: "var(--grey)", cursor: "pointer" }}
          onClick={props.closePreview}
        >
          X
        </IoClose>
      </ImageOptions>
      {props.type.includes("pdf") && (
        <DocumentViewer>
          <Document file={`${process.env.REACT_APP_URL}${props.fileUrl}`}>
            <Page
              pageNumber={1}
              width={400}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </DocumentViewer>
      )}
      {!props.type.includes("pdf") && props.type.includes("application") && (
        <AudioPreviewContainer>
          <AiFillFileZip />
          <h3>Pré-visualização indisponivel.</h3>
        </AudioPreviewContainer>
      )}
      {props.type.includes("image") && (
        <Image src={`${process.env.REACT_APP_URL}${props.fileUrl}`} />
      )}
      {props.type.includes("video") && (
        <video controls>
          <source src={props.fileUrl} type="video/mp4" />
        </video>
      )}
      {props.type.includes("audio") && (
        <AudioPreviewContainer>
          <BsFillFileEarmarkMusicFill />
          <h3>Pré-visualização indisponivel.</h3>
        </AudioPreviewContainer>
      )}
      <SendOptions>
        <Caption
          type="text"
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Descrição da imagem.."
        />
        <MessageBtn
          className="file"
          size={30}
          onClick={() => props.handleSend(caption)}
        />
      </SendOptions>
    </Container>
  );
}

export default FilePreviewPage;
