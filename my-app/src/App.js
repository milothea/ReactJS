import './App.css';
import { useState } from 'react';
import Header from './components/UI/Header';
import Card from './components/UI/Card';

const App = (props) => {
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
          props.items.map(item => {
            return(<Card key={item.id}
                        heading={item.heading}
                        text={item.text}
                        id={item.id}
                        data-view-mode={checked}/>)
          })
        }
      </div>
    </div>
  );
}

export default App;
