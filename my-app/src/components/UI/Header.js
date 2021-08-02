import './Header.css';

const Header = (props) => {
  return (
    <header className="App-header">
      <h1 className="App-header__heading">{props.title}</h1>
    </header>
  );
}

export default Header;
