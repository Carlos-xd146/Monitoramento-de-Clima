export default function CidadeCard({
    cidade, temperatura, condicao, precipitacao, nivelAlerta
}) {
    
    const obterCorAlerta = () => {
        if (nivelAlerta === 'vermelho') return '#f8d7da';
        if (nivelAlerta === 'amarelo') return '#fff3cd';
        return '#d1e7dd';
    };

    const obterIcone = () => {
        if (condicao.toLowerCase().includes('rain')) return '🌧';
        return '☁';
    };

    const obterMensagemAlerta = () => {
        if (nivelAlerta === 'vermelho') return '⚠ ALERTA: Risco alto de atraso';
        if (nivelAlerta === 'amarelo') return '⚠ AMARELO: Monitore a situação';
        return '✅ VERDE: Seguro para entrega';
    };
    return (
        <div style={{ backgroundColor: obterCorAlerta() }} className="card">
            <div className="card-topo">
                <div>
                    <span className="icone">{obterIcone()}</span>
                    <h5>{cidade}</h5>
                </div>
                <div className="card-dados">
                    <h3>{temperatura}°C</h3>
                    <p>{condicao}</p>
                    <small>Precipitação: {precipitacao}%</small>
                </div>
            </div>
            <p className="card-alerta">{obterMensagemAlerta()}</p>
        </div>
    );
}