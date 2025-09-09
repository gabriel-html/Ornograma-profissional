import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
  return (
    <div>
      <Banner />
      <Formulario aoCadastrar={(colaborador) => {}} />
      <section className="times">
        <h1>Minha organização</h1>
        <Time />
      </section>
      <Rodape />
    </div>
  );
}

export default App;
