import AtleticoM from "../images/AtleticoM.jpg"
import styles from "../Styles/styles.css"

function Cards_Vendas(props) {
    const { timeNome } = props
    const { valorCamisa } = props
    const {imgCamisa} = props
    return (
        <div className="row mt-2 ">
            <div className="col-3 px-1">
                <div className="card ">
                    <img className="card-img-top" src={imgCamisa} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">{timeNome}</h5>
                        <p className="card-text">{valorCamisa}</p>
                        <a href="#" className="btn btn-secondary  d-flex justify-content-center">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
            <div className="col-3 px-1">
                <div className="card">
                    <img className="card-img-top" src={AtleticoM} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">{timeNome}</h5>
                        <p className="card-text">{valorCamisa}</p>
                        <a href="#" className="btn btn-secondary d-flex justify-content-center">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
            <div className="col-3 px-1">
                <div className="card">
                    <img className="card-img-top" src={AtleticoM} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">{timeNome}</h5>
                        <p className="card-text">{valorCamisa}</p>
                        <a href="#" className="btn btn-secondary d-flex justify-content-center">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
            <div className="col-3 px-1">
                <div className="card">
                    <img className="card-img-top" src={AtleticoM} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">{timeNome}</h5>
                        <p className="card-text">{valorCamisa}</p>
                        <a href="#" className="btn btn-secondary d-flex justify-content-center">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards_Vendas;