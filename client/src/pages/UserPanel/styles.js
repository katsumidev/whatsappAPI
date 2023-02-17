import styled from "styled-components";
import { FaTrash } from "../../styles/Icons";

export const Container = styled.div`
  .react-paginate {
    width: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;

    svg {
      color: var(--accent-color);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .back {
      transform: rotate(-180deg);
    }

    li {
      transition: 0.2s;
      width: 35px;
      height: 35px;
      padding: 6px;
      text-align: center;
      border: 1px solid #dfdfdf;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--accent-color);
      cursor: pointer;
      border-radius: 2px;

      :hover {
        background-color: var(--accent-color);
        color: var(--accent-color);
        color: #fff;

        svg {
          color: #fff;
        }
      }
    }
  }

  .active-page {
    background-color: var(--accent-color);
    color: #fff !important;
  }
`;

export const Main = styled.div`
  display: flex;
  gap: 30px;
  background-color: var(--secundary-background);
  border-radius: 4px;
  padding: 20px;
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
  background-color: var(--secundary-background);

  :focus {
    border: 3px solid var(--accent-color);
  }
`;

export const ContactNameInput = styled.input`
  border-radius: 6px;
  border: none;
  transition: all 0.2s;
  outline: none;

  :focus {
    border: 3px solid var(--accent-color);
  }
`;

export const SendMsgBtn = styled.input`
  width: 100px;
  align-self: flex-end;
  background-color: var(--accent-color) !important;
  color: var(--mainText);
  font-weight: 600;
  cursor: pointer;

  :hover {
    padding: 12px;
    background-color: var(--accent-color-hover) !important;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  gap: 30px;
`;

export const FirstColumn = styled.div``;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  background-color: var(--main-background);
  padding: 12px;
  border-radius: 6px;

  p {
    font-size: 14px;
    color: #808080;
  }

  b {
    text-transform: capitalize;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

export const DeleteContactBtn = styled(FaTrash)`
  width: 26px;
  height: 26px;
  padding: 6px;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    color: var(--accent-color-hover);
    width: 28px;
    height: 28px;
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ImportContacts = styled.input`
  background-color: #fff;
  width: 150px;
  height: 60px;
`;
