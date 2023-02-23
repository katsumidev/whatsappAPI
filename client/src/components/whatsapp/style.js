import styled from "styled-components";

export const ServerContainer = styled.div`
  margin-top: 25px;
  max-width: 100%;
  display: flex;
  gap: 40%;
  p {
    padding-left: 9px;
  }
`;
export const ServerStatusOn = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  text-align: center;
  max-width: 120px;
  border-radius: 5px;
  height: 25px;
  border: 1px solid #97e9b6;
  .status {
    color: #97e9b6;
  }
`;
export const ServerStatusOff = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  text-align: center;
  max-width: 120px;
  border-radius: 5px;
  height: 25px;
  border: 1px solid #ec2300;
  .status {
    color: #ec2300;
  }
`;

export const LoggoutButton = styled.button`
  background-color: #fff;
  border: 1px solid #b7a8ef;
  color: #b7a8ef;
  width: 120px;
  height: 36px;
  margin-top: 25px;
  border-radius: 5px;
  :hover {
    background-color: #b7a8ef;
    color: #fff;
    cursor: pointer;
  }
`;

export const WhatsAppNumber = styled.div`
  width: 403;
  height: 46px;
  background-color: #f5f5f5;
  text-align: center;
  color: #c0c0c0;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  .whats_phone {
    margin-top: 12px;
  }
`;

export const LeftContent = styled.div`
  flex-diraction: column;
`;

export const RightContent = styled.div``;
