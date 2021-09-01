import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';
import CardList from '../CardList';
import ModalWindow from '../ModalWindow';

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

const MainPage = () => {
    const dispatch = useDispatch();
    const [isDisableMode, setIsDisableMode] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);

    const checkboxHandler = () => setIsDisableMode(prevState => !prevState);

    const addCardHandler = (heading, text) => {
        dispatch({
            type: 'cardsData/addCard',
            payload: {
                heading: heading,
                text: text
            }
        });
        setIsModalActive(prevState => !prevState);
    };

    const cancelAddingHandler = () => {
        setIsModalActive(prevState => !prevState);
    }

    const openModalWindow = () => setIsModalActive(prevState => !prevState);
    return (
        <Fragment>
            <div className='controls-container'>
                <div className='controls__disable-mode'>
                    <Checkbox onClick={checkboxHandler} />
                    <label className='dm-controller__label'
                           htmlFor='dm-controller'>Read only</label>
                </div>
                <button className='controls__btn add-btn'
                        onClick={openModalWindow}>Add new card</button>
                <button className='controls__btn remove-btn'
                        onClick={dispatch({ type: 'cardsData/deleteCards' })}>
                    Remove selected cards
                </button>
            </div>
            <CardList isDisableMode={isDisableMode} />
            <ModalWindow className={isModalActive ? '' : 'hidden'}
                         onAddNewCard={addCardHandler}
                         onCancel={cancelAddingHandler}  />
        </Fragment>
    )
}

export default MainPage;
