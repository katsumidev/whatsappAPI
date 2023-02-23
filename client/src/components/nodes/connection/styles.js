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

export const ButtonConnection = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  cursor: pointer;
  vertical-align: middle;
  padding: 12px 28px;
  border-radius: 4px;
  height: 48px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #fff;
`;

export const H1 = styled.h1`
  font-size: 12pt;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ConnectionLogo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    178deg,
    rgb(156, 177, 248) 7.5%,
    rgb(153, 247, 243) 93.1%
  );
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  overflow: auto;
`;

export const Sub = styled.div`
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600 !important;
    margin: 0;
    color: var(--grey);
  }
`;
