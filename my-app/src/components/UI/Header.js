import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../data/app-context';
import './Header.css';


const Header = ({ title }) => {
    const context = useContext(AppContext);
    return (
        <header className='app-header'>
            <ul className='app-header__routing'>
                <li>
                    <Link className='app-header__routing-btn'
                          to={context.paths.mainPage}>Home</Link>
                </li>
                <li>
                    <Link className='app-header__routing-btn'
                          to={context.paths.authPage}>Sign in</Link>
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
