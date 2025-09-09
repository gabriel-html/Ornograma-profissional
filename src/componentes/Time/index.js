import { useState } from "react";
import Colaborador from "../Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";
import { v4 as uuidv4 } from "uuid";
import { TimesRepo } from "../../repositorios/timesRepo";

const Time = () => {
  const timesRepo = new TimesRepo();
  const [times, setTimes] = useState(timesRepo.listar());

  // Cadastrar novo time
  const cadastrarTime = (novoTime) =>
    setTimes([...times, { ...novoTime, id: uuidv4(), colaboradores: [] }]);

  // Mudar a cor do time
  const mudarCorDoTime = (cor, idTime) =>
    setTimes(times.map((t) => (t.id === idTime ? { ...t, cor } : t)));

  // Deletar colaborador de um time
  const deletarColaboradorDoTime = (idColaborador, idTime) => {
    setTimes(
      times.map((t) =>
        t.id === idTime
          ? {
              ...t,
              colaboradores: t.colaboradores.filter(
                (c) => c.id !== idColaborador
              ),
            }
          : t
      )
    );
  };

  return times.map((time) => (
    <section
      key={time.id}
      className="time"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(time.cor, "0.6"),
      }}
    >
      <input
        type="color"
        className="input-color"
        value={time.cor}
        onChange={(e) => mudarCorDoTime(e.target.value, time.id)}
      />

      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

      <div className="colaboradores">
        <Colaborador
          colaboradores={time.colaboradores}
          corDeFundo={time.cor}
          deletarColaborador={(id) => deletarColaboradorDoTime(id, time.id)}
        />
      </div>
    </section>
  ));
};

export default Time;
