import styled from "styled-components";
import { RiSendPlaneFill } from "../../../styles/Icons";

export const Container = styled.div`
  position: absolute;
  z-index: 999;
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

export const Image = styled.img`
  width: 35%;
  height: auto;
  border-radius: 6px;
  margin: 10px;
  box-shadow: var(--boxShadow);
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

export const MessageBtn = styled(RiSendPlaneFill)`
  color: var(--grey);
  cursor: pointer;

  .file {
    background-color: var(--chat-accent-color);
    border-radius: 100%;
    padding: 16px;
  }
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

export const DocumentViewer = styled.div`
  width: 80%;
  margin: 10px;

  canvas {
    width: 40% !important;
    height: auto !important;
    margin: 0 auto;
  }
`;
