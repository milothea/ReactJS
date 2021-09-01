import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../../data/app-context';
import './Header.css';


const Header = ({ title }) => {
    const context = useContext(AppContext);
    return (
        <header className='app-header'>
            <ul className='app-header__routing'>
                <li className='app-header__rout-item'>
                    <NavLink className='app-header__routing-link'
                             activeClassName='active-routing'
                             exact to={context.paths.mainPage}>Home</NavLink>
                </li>
                <li className='app-header__rout-item'>
                    <NavLink className='app-header__routing-link'
                             activeClassName='active-routing'
                             to={context.paths.authPage}>Sign in</NavLink>
                </li>
            </ul>
            <h1 className='app-header__heading'>{title}</h1>
            <div className='app-header__counter-wrapper'>
                <h3>Total cards:
                    <span className='app-header__counter'>
                        {context.cardsData.length}
                    </span>
                </h3>
            </div>
        </header>
    );
}

export default Header;
