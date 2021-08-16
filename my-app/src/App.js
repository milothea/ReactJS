import './App.css';
import { useEffect, useState} from 'react';
import styled from 'styled-components';
import CardsData from './data/CardsData';
import CardList from './components/UI/CardList';
import Header from './components/UI/Header';

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
    const [isDisableMode, setIsDisableMode] = useState(false);
    const [cardsData, setCardsData] = useState(CardsData);
    const [activeCardsId, setActiveCardsId] = useState([]);

    const checkboxHandler = () => setIsDisableMode(prevState => !prevState);

    const clickHandler = () => {
        setCardsData(prevData => prevData.filter(card => !(activeCardsId.includes(card.id))));
        setActiveCardsId([]);
    };

    const getActiveCards = (id, state) => {
        if (state) {
            setActiveCardsId(prevIdArr => [...prevIdArr, id]);
        } else {
            setActiveCardsId (prevIdArr => prevIdArr.filter(item => item !== id));
        }
    }

    return (
        <div className='react-app'>
            <Header title='Notes' />
            <div className='controls-container'>
                <div className='controls__disable-mode'>
                    <Checkbox onClick={checkboxHandler} />
                    <label className='dm-controller__label' htmlFor='dm-controller'>Read only</label>
                </div>
                <button className='controls__remove-btn' onClick={clickHandler}>Remove selected cards</button>
            </div>
            <CardList data={cardsData}
                      isDisableMode={isDisableMode}
                      getActive={getActiveCards}
            />;
        </div>
    );
}

export default App;
