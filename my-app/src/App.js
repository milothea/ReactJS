import './App.css';
import CardsData from './data/CardsData';
import Header from './components/UI/Header';
import Container from './components/UI/Container';
import Card from './components/UI/Card';

const App = () => {
  return (
    <div className='react-app'>
      <Header title='header' />
      <Container className='container'>
        {CardsData.map(data => <Card key={data.id} heading={data.heading} text={data.text} id={data.id} /> )}
      </Container>
    </div>
  );
}

export default App;
