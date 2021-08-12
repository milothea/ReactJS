import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import CardsData from './data/CardsData';
import Header from './components/UI/Header';
import Card from './components/UI/Card';

const Checkbox = styled.input.attrs({type: 'checkbox', id: 'dm-controller'})`
        & ~ .dm-controller__label {
            letter-spacing: .05rem;
            color: #333333;
            padding-left: 1rem;
        }

        &:hover { cursor: pointer; }

        &:checked ~ .dm-controller__label {
            font-weight: 800;
          letter-spacing: .002rem;
            color: #ef9f4a;
            text-shadow: -.02rem 0 .2rem #f7e773;
        }
    `;

const App = () => {
    const [checked, setChecked] = useState(false);
    const containerClassName = `cards-container${checked ? ' disable-mode' : ''}`;

    const checkboxHandler = () => setChecked(!checked);

    return (
        <div className='react-app'>
            <Header title='Notes' />
            <div className='disable-mode-control'>
                <Checkbox onClick={checkboxHandler} />
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
