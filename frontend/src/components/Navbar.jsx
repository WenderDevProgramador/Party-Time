import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>Paty Time! </h2>
            <ul>
                <li>
                    <NavLink className={'btn'} to="/">Minhas festas </NavLink>
                </li>
                <li><NavLink className={'btn'} to="/party/new">Criar festa</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar