import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  flex-direction: row;
`;

export const ContactRow = styled.div`
  width: 450px;
  padding: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  gap: 10px;
  cursor: pointer;
`;

export const ContactName = styled.p``;

export const ContactPfp = styled.img`
  border-radius: 100%;
  width: 42px;
  height: 42px;
`;

export const ContactInfo = styled.div``;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const ChatMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e5ddd5;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #ededed;
  margin-top: auto;
`;

export const ChatInput = styled.input`
  width: 70%;
  padding: 16px;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 11pt;
`;

export const ContactTopBar = styled.div`
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color:  #ededed;
    margin-top: 0;
    padding: 12px;
    gap: 15px;

    p {
        font-weight: 600;
    }
`
