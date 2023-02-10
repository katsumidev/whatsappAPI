import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secundary-background);

  .login-box {
    .login-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      i {
        margin-bottom: 5px;
      }

      .register-logo {
        font-weight: 900;
      }
    }
  }
`;
