import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  background: transparent;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  padding: 16px;
  box-shadow: rgba(0 0 0 0.4) 0px 10px 30px;

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

export const ConditionLogo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle at 10% 20%,
    rgb(236, 158, 248) 0%,
    rgb(131, 83, 241) 90.1%
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

export const Conditions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
  font-size: 12px;
  width: 100%;
`;
export const True = styled.div`
  border-radius: 6px;
  background-color: var(--sendImage-background);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6px;
  font-weight: 600;
  color: var(--accent-color);

  p {
    margin-bottom: 0;
  }
`;

export const False = styled.div`
  border-radius: 6px;
  background-color: var(--sendImage-background);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  padding: 6px;
  font-weight: 600;
  color: red;

  p {
    margin-bottom: 0;
  }
`;
