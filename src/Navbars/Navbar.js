import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
            <div className='navbar'>
                <h2>Painel de Controle </h2>

                <div className='navbar__list'>
                    <ul>
                        <li>
                            <Link to="/Usuarios">Painel de Usuários</Link>
                        </li>
                        <li>
                            <Link to="/Colabs">Painel de Colaboradores</Link>
                        </li>
                        <li>
                            <Link to="/Cargos">Painel de Cargos</Link>
                        </li>
                        <li>
                            <Link to="/Setores">Painel de Setores</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
export default Navbar