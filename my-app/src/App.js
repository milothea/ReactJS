import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import CardsData from './data/CardsData';
import CardList from './components/UI/CardList';
import Header from './components/UI/Header';
import ModalWindow from './components/UI/ModalWindow';

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
    const [isModalActive, setIsModalActive] = useState(false);

    const changeActiveStateHandler = (id) => setCardsData(prevData => prevData.map(card => {
        if (card.id === id) {
            const prev = {...card};

            prev.isActive = !card.isActive;

            return prev;
        }

        return card;
    }))

    const checkboxHandler = () => setIsDisableMode(prevState => !prevState);

    const deleteHandler = () => {
        setCardsData(prevData => prevData.filter(card => !(card.isActive)));
    };

    const updateCardData = (id, newHeading, newText) => setCardsData(prevData => prevData.map(item => {
        if (item.id === id) {
            const data = {...item};

            data.heading = newHeading;
            data.text = newText;

            return data;
        }

        return item;
    }));

    const addCardHandler = (heading, text) => {
        setCardsData(prevData => [...prevData, {
            heading: heading,
            text: text,
            isActive: false,
            id: uuidv4()
        }]);
        setIsModalActive(prevState => !prevState);
    }

    const cancelAddingHandler = () => {
        setIsModalActive(prevState => !prevState);
    }

    const openModalWindow = () => setIsModalActive(prevState => !prevState);

    return (
        <div className='react-app'>
            <Header title='Notes' />
            <div className='controls-container'>
                <div className='controls__disable-mode'>
                    <Checkbox onClick={checkboxHandler} />
                    <label className='dm-controller__label' htmlFor='dm-controller'>Read only</label>
                </div>
                <button className='controls__btn add-btn' onClick={openModalWindow}>Add new card</button>
                <button className='controls__btn remove-btn' onClick={deleteHandler}>Remove selected cards</button>
            </div>
            <CardList data={cardsData}
                      isDisableMode={isDisableMode}
                      onUpdateCardData={updateCardData}
                      onChangeActiveState={changeActiveStateHandler}
            />
            <ModalWindow className={isModalActive ? '' : 'hidden'}
                         onAddNewCard={addCardHandler}
                         onCancel={cancelAddingHandler}  />
        </div>
    );
}

export default App;
