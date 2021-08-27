import { useContext } from 'react';
import AppContext from '../../data/app-context';
import './Header.css';


const Header = ({ title }) => {
    const context = useContext(AppContext);
    return (
        <header className="App-header">
            <h1 className="App-header__heading">{title}</h1>
            <div className='App-header__counter-wrapper'>
                <h3>Total cards:
                    <span className='App-header__counter'>
                        {context.cardsData.length}
                    </span>
                </h3>
            </div>
        </header>
    );
}

export default Header;
