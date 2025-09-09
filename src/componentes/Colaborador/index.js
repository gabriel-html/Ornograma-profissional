import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { ColaboradoresRepo } from "../../repositorios/colaboradoresRepo";

import "./colaborador.css";

const Colaborador = ({ time, corDeFundo }) => {
  const colaboradoresRepo = new ColaboradoresRepo();
  const [colaboradores, setColaboradores] = useState(
    colaboradoresRepo.listarPorTime(time)
  );

  function deletarColaboradores(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  return colaboradores.map((colaborador) => (
    <div key={colaborador.id} className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => deletarColaboradores(colaborador.id)}
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  ));
};

export default Colaborador;
