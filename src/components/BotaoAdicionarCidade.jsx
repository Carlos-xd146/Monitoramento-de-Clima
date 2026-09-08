export default function BotaoAdicionarCidade({ onClick }){
    return(
        <button className="btn-adicionar" onClick={onClick}>
            + Adicionar Cidade
        </button>
    );
}