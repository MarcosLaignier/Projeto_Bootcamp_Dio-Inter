
function Cards(props){
    const {nameAuthor} = props
    const {conteudoMensagem} = props
    const {dateMensagem} = props
    return(
        <div className="card mt-2 mx-2">
        <div className="card-header">
            {nameAuthor}
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{conteudoMensagem}</p>
                <footer className="blockquote-footer">Data e Hora Postagem:  
                <cite title="Source Title"> {dateMensagem}</cite></footer>
            </blockquote>
        </div>
    </div>
    )
}
export default Cards;