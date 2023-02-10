import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  li {
    padding: 10px;
  }
`;

export const NewUserBtn = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-weight: 500;
  padding: 6px;
  font-size: 14px;
  width: 100px;
  border-radius: 6px;
  border: 2px solid var(--accent-color);
  text-align: center;
  transition: all .2s;

  :hover {
    background-color: var(--accent-color);
    color: white;
    font-weight: 600;
  }
`;
