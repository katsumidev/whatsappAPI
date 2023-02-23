import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20%;
`;

export const FormLeft = styled.div`
  margin-top: 15px;
`;

export const Button = styled.button`
  margin-top: 15px;
  background-color: #00c64b;
  color: white;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const FormRIght = styled.div`
  label {
    margin-top: 15px;
  }
  margin-top: 15px;
`;

export const Audience = styled.div`
  max-width: 50%;
  height: 50px;
  border-color: #e5e5e5 !important;
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;

  span {
    background-color: #6445e0;
  }
`;
