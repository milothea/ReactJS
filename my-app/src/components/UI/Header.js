import './Header.css';

const Header = ({ title }) => {
    return (
        <header className="App-header">
            <h1 className="App-header__heading">{title}</h1>
        </header>
    );
}

export default Header;
