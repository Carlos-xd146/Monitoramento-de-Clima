import { use, useState } from "react";
import './App.css';

import BotaoAdicionarCidade from "./components/BotaoAdicionarCidade";
import InputCidade from "./components/InputCidade";
import { buscarClimaCidade, definirNivelAlerta } from "./services/weatherService";
import CidadeCard from "./components/CidadeCard";

export default function App() {
  const [cidades, setCidades] = useState([])
  const [mostraInput, setMostraInput] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleAdicionarCidade = async (nomecidade) => {
    setCarregando(true);
    setErro('');
    try {
      const dadosClima = await buscarClimaCidade(nomecidade);
      const nivelAlerta = definirNivelAlerta(
        dadosClima.precipitacao,
        dadosClima.condicao
      );
      setCidades((prev) => [
        ...prev,
        { id: Date.now(), ...dadosClima, nivelAlerta }
      ]);
      setMostraInput(false);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  };

  const handleRemoverCidade = (id) => {
    setCidades((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🚚 Dashboard de Monitoramento de Clima</h1>
        <p> Logística & Entregas</p>
      </header>
      <div className="container">
        {!mostraInput && (
          <BotaoAdicionarCidade onClick={() => setMostraInput(true)} />
        )}
        {mostraInput && (
          <InputCidade
            onAdicionar={handleAdicionarCidade}
            onFechar={() => setMostraInput(false)}
          />
        )}
        {carregando && <p className="msg-info">⏳ Buscando dados de clima...</p>}
        {erro && <p className="msg-erro">❌ {erro}</p>}

        <div className="cidades-lista">
          {cidades.length === 0 ?(
            <p className="msg-vazio">Nenhuma cidade adicionada ainda.</p>
          ) : (
            cidades.map((cidade) => (
              <div key={cidade.id} className="card-wrapper">
                <button 
                  className="btn-remover"
                  onClick={() => handleRemoverCidade(cidade.id)}>
                    X
                  </button>
                <CidadeCard {...cidade}/>

              </div>
            ))
          )}
        </div>
      </div>
    </div>

  );
}