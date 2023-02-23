import styled from "styled-components";

export const AddField = styled.div`
  align: right;
  margin-left: 65%;
  border: 1px solid #00c64b;
  background: #00c64b;
  border-radius: 10px;
  width: 50px;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
`;

export const ContentTable = styled.table`
  border-radius: 5px;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;
  max-width: 100%;
  display: grid;
  font-size: 7pt;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e5e5e5;

  tr {
    margin: 10px;
    border-bottom: 1px solid #f3f3f3;
  }

  .titles {
    margin-right: 80px;
  }

  .itens {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    margin-right: 95px;
  }

  button {
    cursor: pointer;
  }

  .check_box {
    margin-right: 140px;
  }

  .last_box {
    margin-right: 50px;
  }
`;

export const ShowAdm = styled.div`
  display: flex;
  gap: 1rem;
  position: left;
  margi-top: 15px;
`;
