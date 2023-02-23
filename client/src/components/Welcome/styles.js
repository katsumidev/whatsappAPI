import styled from "styled-components";

export const LeftContainer = styled.div`
  position: left;
  display: flex;
  flex-direction: column;
  max-width: 15%;
  label {
    margin-top: 15px;
  }
`;

export const RightContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  main {
    text-decoration-line: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  gap: 45%;
`;

export const TextArea = styled.textarea`
  width: 200px;
`;

export const ButtonSave = styled.button`
  border-radius: 5px;
  background-color: #00c64b;
  color: white;
  max-width: 200px;
  cursor: pointer;
`;