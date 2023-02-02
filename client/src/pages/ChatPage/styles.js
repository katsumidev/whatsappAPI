import styled from "styled-components";
import { RiSendPlaneFill, AiOutlinePaperClip } from "../../styles/Icons";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  flex-direction: row;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0;
  gap: 0;
`;

export const ContactRow = styled.li`
  width: 450px;
  height: auto;
  padding: 12px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.2s;
  box-shadow: 0 -1px 1px -1px rgba(0, 0, 0, 0.8);
  background-color: ${(props) =>
    props.selected == "selected"
      ? "var(--secundary-background)"
      : "var(--main-background)"};
  gap: 10px;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.selected == "not" ? "var(--tertiary-background)" : ""};
  }
`;

export const ContactName = styled.p``;

export const ContactPfp = styled.img`
  border-radius: 100%;
  width: 42px;
  height: 42px;
`;

export const ContactInfo = styled.div``;

export const ChatMain = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--chat-background);
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const Chat = styled.ul`
  padding: 26px;
  flex: 1;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: var(--secundary-background);
  margin-top: auto;
  gap: 20px;
`;

export const ChatInput = styled.input`
  width: 70%;
  padding: 16px;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 11pt;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
`;

export const ContactTopBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--secundary-background);
  margin-top: 0;
  padding: 12px;
  gap: 15px;
  overflow: hidden;

  p {
    font-weight: 600;
  }
`;

export const MessageContainer = styled.li`
  display: flex;
  flex-direction: column;
  color: black;
  border-radius: 6px;
  margin: 4px;
  max-width: 60%;
  width: fit-content;
  padding: 6px;
  gap: 10px;
  word-break: break-word;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
  background-color: ${(props) =>
    props.receiver ? "white" : "var(--accent-color)"};
  margin-left: ${(props) => (props.receiver ? "0" : "auto")};

  p {
    font-size: 14px;
    padding: 0 25px 0 5px;
  }

  sub {
    font-size: 10px;
    color: ${(props) => props.receiver ? "#919191" : "#00000"};
    word-break: keep-all;
    align-self: flex-end;
  }
`;

export const MessageBtn = styled(RiSendPlaneFill)`
  color: black;
  cursor: pointer;
`;

export const ClipIcon = styled(AiOutlinePaperClip)`
  color: black;
  cursor: pointer;
`

export const SendFileInput = styled.input`
  display: none;
`

export const Sentinel = styled.li`

`