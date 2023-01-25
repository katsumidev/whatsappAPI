import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: #f3efe0;
    width: 500px;
    display: flex;
    border-radius: 6px;
    padding: 24px;
    flex-direction: column;
    gap: 20px;

    input {
      padding: 10px;
      border-radius: 6px;
      border: none;
      transition: all 0.2s;
      outline: none;

      :focus {
        border: 3px solid #22a39f;
      }
    }
  }
`;

export const MessageInput = styled.textarea`
    max-width: 450px;
    padding: 10px;
      border-radius: 6px;
      border: none;
      transition: all 0.2s;
      outline: none;
      min-height: 100px;
      max-height: 250px;

      :focus {
        border: 3px solid #22a39f;
      }
`;

export const SendMsgBtn = styled.input`
  width: 100px;
  align-self: flex-end;
  background-color: #22a39f;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;
