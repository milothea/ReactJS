import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = ({ title }) => {
    const paths = useSelector(state => state.appPaths);
    const cardsData = useSelector(state => state.cardsData);

    return (
        <header className='app-header'>
            <ul className='app-header__routing'>
                <li className='app-header__rout-item'>
                    <NavLink className='app-header__routing-link'
                             activeClassName='active-routing'
                             exact to={paths.mainPage}>Home</NavLink>
                </li>
                <li className='app-header__rout-item'>
                    <NavLink className='app-header__routing-link'
                             activeClassName='active-routing'
                             to={paths.authPage}>Sign in</NavLink>
                </li>
            </ul>
            <h1 className='app-header__heading'>{title}</h1>
            <div className='app-header__counter-wrapper'>
                <h3>Total cards:
                    <span className='app-header__counter'>
                        {cardsData.length}
                    </span>
                </h3>
            </div>
        </header>
    );
}

export default Header;
