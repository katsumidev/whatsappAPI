import React, {useState} from "react";
import { Container, Background, ModalBox } from "./styles";

function NodeModal(props) {
  const [text, setText] = useState("");

  return (
    <Container>
      <Background />
      <ModalBox>
        {props.type == "delay" && (
          <>
            <input
              type="text"
              placeholder="TEMPO"
              onChange={(e) => setText(e.target.value)}
            />
            <input type="button" value="entrar" onClick={props.handleData(text)} />
          </>
        )}
      </ModalBox>
    </Container>
  );
}

export default NodeModal;
