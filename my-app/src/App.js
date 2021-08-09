import './App.css';
import { useState } from 'react';
import CardsData from './data/CardsData';
import Header from './components/UI/Header';
import Card from './components/UI/Card';

const App = () => {
  const [checked, setChecked] = useState(false);
  const containerClassName = `cards-container${checked ? ' viewmode' : ''}`;

  const checkboxHandler = () => setChecked(!checked);

  return (
    <div className='react-app'>
      <Header title='Notes' />
      <div className='viewmode-control'>
        <input type='checkbox' id='vm-controller' onClick={checkboxHandler}/>
        <label className='vm-controller__label' htmlFor='vm-controller'>Read only</label>
      </div>
      <div className={containerClassName}>
        {
          CardsData.map(data => {
            return(<Card key={data.id}
                        heading={data.heading}
                        text={data.text}
                        id={data.id}
                        isDisableMode={checked}/>)
          })
        }
      </div>
    </div>
  );
}

export default App;
