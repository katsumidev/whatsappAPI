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

export const H1 = styled.h1`
  font-size: 12pt;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DelayLogo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 202, 146);
  background: linear-gradient(
    282deg,
    rgba(255, 202, 146, 1) 35%,
    rgba(255, 157, 53, 1) 100%
  );
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  p {
    margin-top: 8px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    color: var(--grey);
  }
`;
