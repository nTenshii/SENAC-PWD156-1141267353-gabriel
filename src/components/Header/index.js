import {Link} from 'react-router-dom'
import './style.css'
function Header(){
    return(
        <header>
                NuBank
                <div>
                        <Link to="/">HOME</Link>
                        <Link to="/cadastro">CADASTRO</Link>
                        <Link to="/financiamento">FINANCIAMENTO</Link>
                        <Link to="/contas">CONTA</Link>
                        <Link to="sobre-nos">SOBRE NÓS</Link>
                </div>
        </header>)
}
export default Header