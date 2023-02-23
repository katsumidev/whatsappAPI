import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin-top: 110px;
  .menu_line {
    max-width: 90%;
    margin: 3px;
  }
`;

export const ItensMenu = styled.div`
  display: flex;
  .link {
    margin-right: 16px;
    cursor: pointer;
    text-decoration: none;
  }
  .link:hover {
    color: #97e9b6;
    text-decoration: none;
  }
`;