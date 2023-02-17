import styled from "styled-components";
import {
  RiSendPlaneFill,
  AiOutlinePaperClip,
  HiDownload,
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

export const ContactHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 25.8%;
`;

export const MyProfile = styled.div`
  background-color: var(--secundary-background);
  padding: 10px;
`;

export const Contacts = styled.div`
  margin-top: 120px;
`;

export const ContactsList = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 35%;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  background-color: var(--main-background);
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: var(--sendImage-background);
  padding: 6px;
  width: 100%;

  svg {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const SearchInput = styled.input`
  border-radius: 6px;
  background-color: var(--sendImage-background);
  border: none;
  outline: none;
  margin-left: 20px;
  font-size: 12px;
  width: 100%;
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
  box-shadow: var(--boxShadow);
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

export const ContactName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100% !important;
  max-width: 100%;
  min-width: 50%;

  p {
    margin-bottom: 0 !important;
    font-weight: 600;
  }

  small {
    overflow: hidden;
    color: var(--grey);
    display: inline-flex;
    align-items: center;
    gap: 5px;

    span {
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    svg {
      height: 15px;
      width: 15px;
    }
  }
`;

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
  overflow-y: scroll;
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
  box-shadow: var(--boxShadow);
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
  box-shadow: var(--boxShadow);
  cursor: pointer;

  p {
    font-weight: 600;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: black;
  border-radius: 6px;
  margin: 4px;
  max-width: 60%;
  width: fit-content;
  padding: 6px;
  word-break: break-word;
  margin: 10px 0;
  gap: 5px;
  box-shadow: var(--boxShadow);
  background-color: ${(props) =>
    props.receiver ? "white" : "var(--chat-accent-color)"};
  margin-left: ${(props) => (props.receiver ? "0" : "auto")};

  p {
    font-size: 14px;
    padding: 0 25px 0 5px;
    margin-bottom: 0;
  }

  sub {
    font-size: 10px;
    color: ${(props) => (props.receiver ? "#919191" : "#00000")};
    word-break: keep-all;
    align-self: flex-end;
    padding: 6px 0;

    svg {
      margin-left: 5px;
    }
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
    background-color: var(--chat-accent-color);
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

export const Sentinel = styled.li`
  background-color: transparent;
`;

export const DocumentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: var(--accent-color-secundary);
  padding: 16px;
  border-radius: 6px;
  box-shadow: var(--boxShadow);

  p {
    font-size: 13px;
  }
`;

export const QuotedMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DocumentViewer = styled.div`
  width: 80%;
  margin: 10px;

  canvas {
    width: 40% !important;
    height: auto !important;
    margin: 0 auto;
  }
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

    svg {
      margin-left: 5px;
    }
  }
`;

export const ImagePreview = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 26px;
  z-index: 999;

  img {
    width: 50%;
    height: auto;
    border-radius: 16px;
  }
`;

export const PreviewBackground = styled.div`
  background-color: var(--secundary-background);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: -1;
  position: absolute;
`;

export const AudioMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  img {
    width: 52px;
    height: 52px;
  }
`;

export const LastMessage = styled.div`
  font-size: 12px;
  color: black;
  background-color: blue;
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
  color: black;
  font-size: 20px;
  height: fit-content;
`;
export const Image = styled.img`
  width: 35%;
  height: auto;
  border-radius: 6px;
  margin: 10px;
  box-shadow: var(--boxShadow);
`;

export const ImageMessage = styled.img`
  border-radius: 4px;
  cursor: pointer;
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
  box-shadow: var(--boxShadow);
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
`;

export const AudioPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    fill: grey;
    font-size: 100px;
    color: var(--grey);
  }

  h3 {
    color: var(--grey);
    font-weight: 500;
  }
`;

export const DownloadOverlay = styled(HiDownload)`
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const NewMessages = styled.div`
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  font-size: 11px;
  color: #fff;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;

  sub {
    font-size: 11px;
    color: var(--grey);
  }
`;
