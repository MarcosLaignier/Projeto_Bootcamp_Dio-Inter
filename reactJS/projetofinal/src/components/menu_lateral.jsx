import styles from "../Styles/styles.css"


function Menu_Esquerdo() {
    return (
        <>
        
        <ul className="list-group col-3 mt-2 mx-2">
        <h4 className="card-title text-center">Categorias</h4>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <a href="#">Clubes Brasileiros</a>
                <span className="badge badge-primary badge-pill text-secondary">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="#">Clubes Europeus</a>
                <span className="badge badge-primary badge-pill text-secondary">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center text-secondary">
            <a href="#">Camisas Historicas</a>
                <span className="badge badge-primary badge-pill text-secondary">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="#">Selecoes Nacionais</a>
                <span className="badge badge-primary badge-pill text-secondary">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="#">Linha Premium</a>
                <span className="badge badge-primary badge-pill text-secondary">1</span>
            </li>
        </ul>
        </>
    )

}

export default Menu_Esquerdo;