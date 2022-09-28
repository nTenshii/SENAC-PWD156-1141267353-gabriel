import { 
    BrowserRouter, 
    Routes, 
    Route } from "react-router-dom"
import Cadastro from "./PAGES/Cadastro/index.js"
import Home from "./PAGES/Home/index.js"
import Financiamento from "./PAGES/Financiamento/index.js"
import Contas from "./PAGES/Conta/index.js"
import Sobre from "./PAGES/Sobre/index.js"
import Erro from "./PAGES/Erro/index.js"
import Header from "./components/Header/index.js"

function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/financiamento' element={<Financiamento/>}/>
                <Route path='/contas' element={<Contas/>}/>
                <Route path='/sobre-nos' element={<Sobre/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
            </BrowserRouter>
    )
}
export default RouterApp