import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;
    transition: all 0.2s;
    margin-top: 20px;
    height: 100%;

    input {
      width: 90%;
      padding: 10px;
      margin: 5px 0;
      border-radius: 2px;
      outline: none;
      transition: all 0.2s;
      border: none;
      font-size: 12px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .submitButton {
      width: 100px;
      align-self: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s;

      :hover {
        background-color: var(--accent-color);
        color: white;
      }
    }
  }
`;

export const ModalBox = styled.div`
  width: 400px;
  background-color: var(--main-background);
  padding: 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .hr {
    height: 2px;
    width: 95%;
    opacity: 0.1;
    margin: 10px 0;
    background-color: #000;
  }

  h4 {
    font-weight: 600;
  }

  small {
    width: 90%;
    font-weight: 600;
    color: var(--grey);
  }

  .numberInfo {
    font-weight: 300;
    font-size: 10px;
    text-align: left;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }

  hr {
    color: black;
  }

  sub {
    margin: 5px;
  }
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const SaveContactBtn = styled.input`
  width: 150px !important;
  justify-self: flex-end !important;
  background-color: var(--accent-color);
  color: #fff;
  font-weight: 600;
  margin-top: 50px !important;

  :hover {
    opacity: 0.8;
  }
`;

export const ContactNameInput = styled.input``;

export const ContactEmailInput = styled.input``;
