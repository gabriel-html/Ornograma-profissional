import { useState } from "react";
import Colaborador from "../Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";
import { v4 as uuidv4 } from "uuid";
import { TimesRepo } from "../../repositorios/timesRepo";

const Time = () => {
  const timesRepo = new TimesRepo();
  const [times, setTimes] = useState(timesRepo.listar());

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function mudarCorDoTime(cor, time) {
    time.cor = cor;
  }

  return times?.map((time) => {
    return (
      <section
        key={uuidv4()}
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          onChange={(evento) => mudarCorDoTime(evento.target.value, time)}
          value={time.cor}
          type="color"
          className="input-color"
        />

        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          <Colaborador time={time} corDeFundo={time.cor} />
        </div>
      </section>
    );
  });
};

export default Time;
