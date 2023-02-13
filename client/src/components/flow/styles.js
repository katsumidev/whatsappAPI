import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  height: 100vh;
  float: right;

  .radial-menu {
    height: fit-content;
    position: fixed;
    margin: 0 auto;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -150%);

    button {
      transition: all 0.2s;
      border: none;
      color: #fff;
    }

    .content {
      background-color: #98d498;
    }
    .buttons {
      background-color: #6bd16b;
    }
    .action {
      background-color: #54d154;
    }
    .condition {
      background-color: #45d145;
    }
    .connection {
      background-color: #59c959;
    }
    .random {
      background-color: #43bc43;
    }
    .delay {
      background-color: var(--accent-color);
    }
  }

  .react-flow .react-flow__handle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--accent-color-hover) !important;
  }

  .react-flow .react-flow__handle-top {
  }

  .react-flow .react-flow__handle-bottom {
  }

  .react-flow .react-flow__node {
    min-width: 300px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-width: 2px;
    border-radius: 12px;
    outline: none;
    background-color: #fff;
  }
`;

export const SelectElement = styled(Select)`
  .react-select-container {
    width: 25%;
  }

  .react-select__control {
    outline: none;
    border: none;
    background-color: #f4f4f4;
    font-size: 14px;

    :focus {
      border: none;
      outline: none;
    }
  }

  .react-select__option {
    outline: none;
    border: none;
    background-color: #fff;
    color: black;

    :hover {
      background-color: #f4f4f4;
    }
  }
`;

//Nodes and modals styles

export const Modal = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: #fff;
  color: #000;
  float: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
// Content Square

export const ContentHeader = styled.div`
  width: 100%;
  padding: 10px;
  background: #ffd8d2;
  text-align: center;
  font-weight: 500;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const DelayRange = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 110px;
  margin-top: 5px;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  color: #5a677d;
  border: 1px dotted gray;
`;

export const InputRange = styled.input`
  margin-right: 0.5rem;
  max-width: 50%;
`;

// Random square

export const RandomHeader = styled.div`
  width: 100%;
  height: 35px;
  background: #e1fff6;
  text-align: center;
`;
export const InputRangeRandom = styled.input`
  display: flex;
  padding-right: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e1e5ea;
`;

// Action Square

export const ActionHeader = styled.div`
  width: 100%;
  padding: 10px;
  background: #ffeca7;
  text-align: center;
`;

export const ActionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 85%;
  height: 10%;
  border-radius: 10px;
  margin: 0 auto;
  color: #5a677d;
  border: 1px dashed gray;
  transition: 0.2s;

  :hover {
    border: 1.5px dashed var(--accent-color);
  }

  label {
    font-weight: 500 !important;
    font-size: 14px;
    color: var(--grey);
  }
`;

export const ButtonHeader = styled.div`
  width: 100%;
  height: 35px;
  background: #ffeef8;
  text-align: center;
`;

export const ButtonBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 110px;
  margin-top: 5px;
  width: 100%;
  height: 10%;
  border-radius: 10px;
  color: #5a677d;
`;

export const ButtonTextArea = styled.textarea`
  resize: vertical;
`;

export const ConditionHeader = styled.div`
  width: 100%;
  height: 35px;
  background: #efe5ff;
  text-align: center;
`;

export const ConditionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 110px;
  margin-top: 5px;
  width: 12%;
  padding-left: 80px;
  height: 10%;
  border-radius: 10px;
  color: #5a677d;
`;

export const ConnectionHeader = styled.div`
  width: 100%;
  height: 35px;
  background: #efe5ff;
  text-align: center;
`;
export const ConnectionBody = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70%;
  text-align: center;
`;

export const DelayHeader = styled.div`
  width: 100%;
  height: 35px;
  background: #ffca92;
  text-align: center;
`;

export const InputTimeDelay = styled.input`
  border-radius: 5px;
  max-width: 45%;
`;

export const InputTypeTimeDelay = styled.select`
  border-radius: 5px;
  max-width: 45%;
`;

export const NodesSelector = styled.div``;

export const NodesBtn = styled.div``;

export const AddNodeBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #fff;
  background: var(--accent-color);
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color) 100%
  );
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(NaN, 52, 175, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  ::before {
    content: "";
    border-radius: 1000px;
    min-width: calc(30px + 12px);
    min-height: calc(30px + 12px);
    border: 6px solid var(--accent-color);
    box-shadow: 0 0 60px rgba(NaN, 52, 175, 0.14);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  :hover,
  :focus {
    color: #fff;
    background-color: var(--accent-color-hover);
    transform: translateY(-8px);
  }

  :hover::before,
  :focus::before {
    opacity: 1;
  }

  ::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 6px solid var(--accent-color);
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  :hover::after,
  :focus::after {
    animation: none;
    display: none;
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 70px;
      height: 70px;
      opacity: 0;
    }
  }
`;

export const WhatsappLogo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 8px;
  background: rgb(94, 250, 120);
  background: linear-gradient(
    282deg,
    rgba(94, 250, 120, 1) 35%,
    rgba(48, 192, 47, 1) 100%
  );
`;
