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

export const SquareContent = styled.div`
  border-bottom: 1px #000;
  span {
    margin-left: 85%;
  }
`;

export const RandomLogo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    106.5deg,
    rgba(255, 215, 185, 0.91) 23%,
    rgba(223, 159, 247, 0.8) 93%
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
