import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 300px;

    input {
      padding: 10px;
      margin: 5px;
      border-radius: 6px;
      border: 1px solid black;
    }

    .submitButton {
      width: 100px;
      align-self: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
