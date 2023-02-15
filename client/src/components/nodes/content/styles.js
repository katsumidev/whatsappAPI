import styled from "styled-components"

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

export const ContentDiv = styled.div`
background-color: #f4f4f4;
display: flex;
justify-content: flex-start;
align-items: center;
min-height: 36px;
background: #f4f4f4;
border-radius: 6px;
margin-bottom: 9px;
font-size: 15px;
line-height: 18px;
color: #000;
  .p {
    padding-top: 5px;
  }
`

export const H1 = styled.h1`
  font-size: 12pt;
  display: flex;
  align-items: center;
  gap: 5px;
`;
