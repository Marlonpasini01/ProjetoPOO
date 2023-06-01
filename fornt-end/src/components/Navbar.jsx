import { Link } from "react-router-dom"
import './Navbar.css';


const Navbar = () => {
  return (

    <div id= "Nav">
    <nav class="navbar"> 
            
                <Link to={`/btn2`}>Menu</Link>
                        
                <Link to={`/btn`}> Cadastrar </Link>
                   
    </nav>
    </div>
  )
}

export default Navbar