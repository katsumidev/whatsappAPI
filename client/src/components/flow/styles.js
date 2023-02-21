import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
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
  width: 30vw;
  height: 100vh;
  background-color: #fff;
  color: #000;
  float: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;
// Content Square

export const ContentHeader = styled.div`
  width: 100%;
  padding: 10px;
  background: #ffd8d2;
  text-align: center;
  font-weight: 500;
`;

export const ContainerTextArea = styled.div`
  width: 90%;
  resize: none;
  outline: none;
  margin-top: 10px;
  margin-left: 10px;
  min-height: 145px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const SelectCondition = styled.select`
  -moz-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-color: rgb(229, 229, 229);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  -moz-box-pack: justify;
  justify-content: space-between;
  min-height: 38px;
  outline: 0px !important;
  position: relative;
  transition: all 100ms ease 0s;
  box-sizing: border-box;
  width: 293px;
  height: 48px;
  margin-top: 4%;
`;

export const MenuText = styled.div`
  background-color: #f5f5f5;
  padding: 6px;
  border-radius: 2px 2px 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  border: 1px solid #d4d4d5;
`;

export const MenuLeft = styled.ul`
  border-radius: 2px;
  background-color: #fff;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const MenuGroupLeft = styled.ul`
  border-radius: 2px;
  background-color: #fff;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: 5px;
`;

export const MenuItemDrop = styled.li`
  border: 1px solid #ccc;
  user-select: none;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const SpanItemMenuDrop = styled.span`
  min-width: 30px;
  min-height: 30px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.textarea`
  overflow-y: auto;
  width: 100%;
  height: 80px;
  resize: vertical;
  border-top: none;
  border-top-color: currentcolor;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;
  border: none;
  border: 1px solid #d4d4d5;
  padding: 6px;
`;

export const MenuItem = styled.li`
  border: 1px solid #ccc;
  user-select: none;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const SpanItem = styled.span`
  min-width: 30px;
  min-height: 30px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardsButtonsContent = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin-top: 100px;
`;

export const CardButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  margin: 4px;
  width: 80px;
  height: 90px;
  border: 2px dashed #e1e5ea;
  border-radius: 15px;
  background-color: #fff;
  color: #8492a6;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  transform: translate3d(0, 0, 0);
  will-change: border-color, color;
`;

export const CardIconButton = styled.div`
  color: #8492a6;
  text-align: center;
  cursor: pointer;
`;

export const CardTextButton = styled.div`
  color: #8492a6;
  text-align: center;
  cursor: pointer;
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
  select {
    max-width: 80%;
  }
`;

export const InputRangeRandomContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const CreateNewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  height: 50px;
  border: 2px dashed #e1e5ea;
  border-radius: 6px;
  color: #8492a6;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;
  text-align: center;
  padding: 12px;
  transition: .2s;

  :hover {
    border: 2px dashed #00c64b;
    cursor: pointer;
  }
`;

export const ButtonDelete = styled.button`
  max-width: 120px;
  margin-left: right;
  border-radius: 10px;
  padding: 6px;
  font-size: 11px;
  background: transparent;
  border: 1px solid var(--accent-color);
  transition: .2s;

  :hover {
    background-color: var(--accent-color);
    color: #fff;
  }
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
  padding: 16px;
  background: #ffeef8;
  text-align: center;
  box-shadow: var(--boxShadow);
`;

export const ButtonBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 110px;
  width: 100%;
  bottom: 0;
  border-radius: 10px;
  padding: 8px;
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
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
  margin-top: 25px;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  color: #5a677d;
  p {
    margin-top: 15px;
  }
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
  padding: 12px;
  background: rgb(255, 202, 146);
  background: linear-gradient(
    5deg,
    rgba(255, 202, 146, 1) 30%,
    rgba(255, 157, 53, 1) 100%
  );
  text-align: center;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
`;

export const InputTimeDelay = styled.input`
  border-radius: 5px;
  padding: 4px;
  max-width: 90px;
  outline: none;
  border: 1px solid var(--grey);
`;

export const InputTypeTimeDelay = styled.select`
  border-radius: 5px;
  max-width: 45%;
`;

export const DelayBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;

  .react-select-container {
    max-width: 45%;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
