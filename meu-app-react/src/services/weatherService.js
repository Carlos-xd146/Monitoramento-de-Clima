const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function buscarClimaCidade(cidade) {
    try {
        const url = `${BASE_URL}?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`;
        const response = await fetch(url);
        const dados = await response.json();

        return {
            cidade: dados.name,
            temperatura: Math.round(dados.main.temp),
            condicao: dados.weather[0].main,
            precipitacao: dados.clouds.all,
        };
    } catch (erro) {
        throw new Error (`Não consegui encontrar a cidade: ${cidade}`);
    }
}

export function definirNivelAlerta(precipitacao, condicao) {
    if (precipitacao > 70 || condicao.toLowerCase().includes('rain')) {
        return 'vermelho';
    }
    if (precipitacao > 40) {
        return 'amarelo';
    }
    return 'verde';
}