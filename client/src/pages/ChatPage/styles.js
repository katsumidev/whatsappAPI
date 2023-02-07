import styled from "styled-components";
import {
  RiSendPlaneFill,
  AiOutlinePaperClip,
  MdOutlineEmojiEmotions,
} from "../../styles/Icons";
import background from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: var(--main-background);
  overflow: hidden;
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
`;

export const ContactRow = styled.div`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--chat-background);
  position: relative;
`;

export const Chat = styled.div`
  padding: 26px;
  flex: 1;
  overflow: auto;
  height: 100%;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 16px;
  background-color: var(--secundary-background);
  margin-top: auto;
  gap: 20px;
  bottom: 0;
`;

export const ChatInput = styled.input`
  padding: 16px;
  width: 100%;
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
  top: 0;

  p {
    font-weight: 600;
  }
`;

export const MessageContainer = styled.div`
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
  margin: 10px 0;
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
    color: ${(props) => (props.receiver ? "#919191" : "#00000")};
    word-break: keep-all;
    align-self: flex-end;
  }

  img {
    width: 300px;
    height: 100%;
    object-fit: cover;
  }
`;

export const MessageBtn = styled(RiSendPlaneFill)`
  color: var(--grey);
  cursor: pointer;

  .file {
    background-color: var(--accent-color);
    border-radius: 100%;
    padding: 16px;
  }
`;

export const ClipIcon = styled(AiOutlinePaperClip)`
  color: var(--grey);
  cursor: pointer;
`;

export const EmojiSelectorMenu = styled(MdOutlineEmojiEmotions)`
  color: var(--grey);
  cursor: pointer;
`;

export const SendFileInput = styled.input`
  display: none;
`;

export const Sentinel = styled.li``;

export const DocumentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: var(--accent-color-secundary);
  padding: 16px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;

  p {
    font-size: 13px;
  }
`;

export const QuotedMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Quoted = styled.div`
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--secundary-background);
  gap: 2px;

  p {
    font-size: 13px;
    padding: 0;
    color: var(--secundaryText);
  }

  b {
    font-size: 13px;
    color: var(--accent-color-hover);
  }
`;

export const NormalMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  sub {
    align-self: flex-end;
  }
`;

export const SendImageContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 26px;
  overflow: hidden;
  background-color: var(--sendImage-background);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ImageOptions = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: flex-start;
`;

export const CloseBtn = styled.p`
  cursor: pointer;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 35%;
  height: auto;
  border-radius: 6px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
`;

export const SendOptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  padding: 16px;
  gap: 20px;
`;

export const Caption = styled.input`
  padding: 16px;
  border-radius: 12px;
  outline: none;
  border: none;
  width: 100%;
  background-color: var(--secundary-background);
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
`;

export const EmojiMenu = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10px;
  z-index: 1;
`;

export const Menu = styled.div`
  position: relative;
  bottom: 75px;
`;

export const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
`