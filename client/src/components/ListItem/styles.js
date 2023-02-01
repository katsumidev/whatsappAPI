import styled from "styled-components";
import { GrFormClose, AiFillEye, BsFillChatFill } from "../../styles/Icons";

export const Container = styled.div`
  background-color: var(--secundary-background);
  padding: 20px;
  margin: 10px;
  width: 100%;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;

  :hover {
    padding: 24px;
    border: 2.5px solid var(--accent-color);
  }
`;

export const Username = styled.p`
  font-weight: 600;
`;

export const Numbername = styled.p``;

export const Number = styled.p``;

export const DeleteButton = styled(GrFormClose)`
  cursor: pointer;
  border-radius: 100%;
  transition: all 0.2s;

  :hover {
    background-color: var(--accent-color);
    fill: white;
  }
`;

export const ViewButton = styled(AiFillEye)`
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    fill: var(--accent-color);
  }
`;

export const LiveChatButton = styled(BsFillChatFill)`
  cursor: pointer;
  transition: all .2s;

  :hover {
    fill: var(--accent-color);
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
