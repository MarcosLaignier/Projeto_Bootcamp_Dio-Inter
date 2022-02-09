import CestaCompras from "../images/CestaCompra.svg"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <a className="navbar-brand text-white mx-2" href="#">TimeCamisas</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/">Home </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href="#">Destaques</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contato">Contato</a>
          </li>
          
          
         {/*  <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Link dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Ação</a>
          <a className="dropdown-item" href="#">Outra ação</a>
          <a className="dropdown-item" href="#">Algo mais aqui</a>
        </div>
      </li> */}
        </ul>
        <img className=" carrinho img-fluid " src={CestaCompras} />
      </div>
    </nav>
  )
}

export default Header;