import { useState } from "react";

export default function InputCidade({ onAdicionar, onFechar }) {
    const [nomeCidade, setNomeCidade] = useState('');

    const handleBuscar = () => {
        if (nomeCidade.trim() === '') {
            alert('Digite o nome de uma cidade');
            return;
        }
        onAdicionar(nomeCidade);
        setNomeCidade('');
    };

    return (
        <div className="input-card">
            <h5>Adicionar Nova Cidade</h5>
            <input 
                type="text"
                placeholder="Ex: São Paulo, Rio de Janeiro"
                value={nomeCidade}
                onChange={(e) => setNomeCidade(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleBuscar()}
            />
            <div className="input-botoes">
                <button className="btn-buscar" onClick={handleBuscar}>Buscar</button>
                <button className="btn-cancelar" onClick={onFechar}>Cancelar</button>
            </div>
        </div>
    );

}