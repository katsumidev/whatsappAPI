import { useState } from "react";
import { Audience, Button, Container, FormLeft, FormRIght } from "./styles";
import Menu from "../Menu/index";
import { useParams } from "react-router";

function Company() {
  const { userIns } = useParams();

  const timeZones = [
    { value: "UTC-12", label: "(UTC-12:00) International Date Line West" },
    { value: "UTC-11", label: "(UTC-11:00) Coordinated Universal Time-11" },
    { value: "UTC+12", label: "(UTC+12:00) Coordinated Universal Time+12" },
  ];

  const [timeZone, setTimeZone] = useState("UTC+0");

  return (
    <>
      <Menu />
      <Container>
        <FormLeft>
          <form>
            <label className="label" htmlFor="nome">
              Nome:
            </label>{" "}
            <br />
            <input type="text" placeholder="Informe o nome da companhia" />{" "}
            <br />
            <label htmlFor="fuso-horario">Fuso Horário Escolhido:</label> <br />
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
            >
              {timeZones.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />
            <Button type="submit">Atualizar</Button>
          </form>
        </FormLeft>
        <FormRIght>
          <label htmlFor="logotipo">Logotipo</label>
          <br />
          <input type="file" name="logo" id="logo" />
        </FormRIght>
      </Container>
      <h4>Zerar Companhia/Audiência:</h4>
      <Audience>
        <span className="span">Zerar contatos de audiência</span>
        <p>
          Aviso! Deletar todos os contatos da audiência e estatísticas de
          interações.
        </p>
      </Audience>
      <Audience>
        <span className="span">Zerar companhia</span>
        <p>
          Aviso! Restaurar companhia ao estado original, completamente vazia,
          sem fluxos, sem audiência... nada.
        </p>
      </Audience>
    </>
  );
}

export default Company;
