import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  background: transparent;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 30px;

  :hover {
    border: 3px solid var(--accent-color);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 50px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 14px;

  p {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600 !important;
    margin: 0;
    color: var(--grey);
  }

  sub {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const WhatsappLogo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(94, 250, 120);
  background: linear-gradient(
    282deg,
    rgba(94, 250, 120, 1) 35%,
    rgba(48, 192, 47, 1) 100%
  );
`;

export const MiniChat = styled.div`
  background-color: var(--chat-background);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px 6px;
  border-radius: 12px;
`;

export const Message = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 6px;
  text-align: initial;
  font-size: 12px;
  width: 70%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

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
`;

export const ButtonMessage = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 6px;
  font-size: 12px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5px;
  color: #027eb5;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const HandleBtns = styled.div`
  background-color: var(--sendImage-background);
  border-radius: 6px;
  padding: 6px;
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5px;
  color: #000;
`;
