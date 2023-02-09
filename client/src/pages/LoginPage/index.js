import React from "react";
import "../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
import "../../assets/dist/css/adminlte.min.css"
import { Container } from './styles';
import {MdEmail, HiLockClosed, BsWhatsapp} from "../../styles/Icons"

function LoginPage() {
  return (
    <Container>
      <div className="login-box">
        <div className="login-logo">
          <i className="fa-brands fa-whatsapp" style={{color: "#34af23"}}>{<BsWhatsapp />}</i>
          <a href="#">
            <b>Atende</b>Zap
          </a>
        </div>
        {/* <!-- /.login-logo --> */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Faça login para iniciar sua sessão</p>

            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope">{<MdEmail />}</span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock">{<HiLockClosed />}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Lembrar de mim</label>
                  </div>
                </div>
                {/* <!-- /.col --> */}
                <div className="col-4">
                  <a
                    href="#"
                    type="submit"
                    className="btn btn-success btn-block"
                  >
                    Entrar
                  </a>
                </div>
                {/* <!-- /.col --> */}
              </div>
            </form>
            <div className="row d-flex justify-content-between my-3">
              <p className="mb-1">
                <a href="#">Esqueci senha</a>
              </p>
              <p className="mb-0 float-right">
                <a href="#" className="text-center">
                  Novo cadastro
                </a>
              </p>
            </div>
          </div>
          {/* <!-- /.login-card-body --> */}
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
