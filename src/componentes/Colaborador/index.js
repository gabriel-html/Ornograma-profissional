import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { ColaboradoresRepo } from "../../repositorios/colaboradoresRepo";
import { v4 as uuidv4 } from "uuid";

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

  return colaboradores.map((colaborador, indice) => (
    <div key={uuidv4()} className="colaborador">
      <IoIosCloseCircle size={25} className="deletar" onClick={() => {}} />

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
