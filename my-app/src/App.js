import './App.css';
import { useState } from 'react';
import CardsData from './data/CardsData';
import Header from './components/UI/Header';
import Card from './components/UI/Card';

const App = () => {
    const [checked, setChecked] = useState(false);
    const containerClassName = `cards-container${checked ? ' disable-mode' : ''}`;

    const checkboxHandler = () => setChecked(!checked);

    return (
        <div className='react-app'>
            <Header title='Notes' />
            <div className='disable-mode-control'>
                <input type='checkbox' id='dm-controller' onClick={checkboxHandler}/>
                <label className='dm-controller__label' htmlFor='dm-controller'>Read only</label>
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
