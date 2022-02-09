import Cards_Vendas from "../components/cards_vendas";
import Header from "../components/header";
import Menu_Esquerdo from "../components/menu_lateral";
import AtleticoM from "../images/AtleticoM.jpg"
import Brasil from "../images/Brasil.jpg"


const Home = () => {
    return(
        <>
        <Header/>
        <div className = "Cards_Vendas"> 
        <Menu_Esquerdo/>
        <Cards_Vendas timeNome = "Atletico" valorCamisa = "R$300,00" imgCamisa={AtleticoM}/>
        
        </div>
        <div className="Cards_Vendas2">
        <Cards_Vendas timeNome = "Brasil" valorCamisa = "R$200,00" imgCamisa={AtleticoM}/>
        </div>
        
            
      
        

        </>
    )
}


export default Home;