import { use, useState } from "react";
import './App.css';

// import CidadeCard from './components/CidadeCard';
import BotaoAdicionarCidade from "./components/BotaoAdicionarCidade";
// import InputCidade from './components/InputCidade';
// import {buscarCimaCidade, definirNivelAlerta} from './services/weatherService';

export default function App(){
  const [cidades, setCidades] = useState([])
  const [mostraInput, setMostraInput] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState ('');


return(
  <div className="app-container">
    <header className="header">
      <h1>🚚 Dashboard de Monitoramento de Clima</h1>
      <p> Logística & Entregas</p>
    </header>
    <div className="container">
      {!mostraInput && (
        <BotaoAdicionarCidade onClick={() => setMostraInput(true)}/>
      )}
      
    </div>
  </div>

);}