import styled from "styled-components";
import { GrFormClose, AiFillEye, BsFillChatFill } from "../../styles/Icons";

export const Container = styled.div`
  background-color: #f5f5f5;
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
    border: 2.5px solid #22a39f;
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
    background-color: #22a39f;
    fill: white;
  }
`;

export const ViewButton = styled(AiFillEye)`
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    fill: #22a39f;
  }
`;

export const LiveChatButton = styled(BsFillChatFill)`
  cursor: pointer;
  transition: all .2s;

  :hover {
    fill: #22a39f;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
