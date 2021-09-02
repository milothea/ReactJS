import { Fragment, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { cardsActions } from '../../store/cardsDataSlice';
import './MainPage.css';
import CardList from '../CardList';
import ModalWindow from '../ModalWindow';

const MainPage = () => {
    const dispatch = useDispatch();
    const isReadOnly = useSelector(state => state.settings.isReadOnly);
    const [isModalActive, setIsModalActive] = useState(false);

    const addCardHandler = (heading, text) => {
        dispatch(cardsActions.addCard({
            heading: heading,
            text: text
        }));
        setIsModalActive(prevState => !prevState);
    };

    const cancelAddingHandler = () => {
        setIsModalActive(prevState => !prevState);
    }

    const openModalWindow = () => setIsModalActive(prevState => !prevState);

    const deleteHandler = () => dispatch(cardsActions.deleteCards());

    return (
        <Fragment>
            <div className='controls-container'>
                <h2 className='read-only-heading'>{isReadOnly ? 'Read only mode' : ''}</h2>
                <button className='controls__btn add-btn'
                        onClick={openModalWindow}>Add new card</button>
                <button className='controls__btn remove-btn'
                        onClick={deleteHandler}>
                    Remove selected cards
                </button>
            </div>
            <CardList />
            <ModalWindow className={isModalActive ? '' : 'hidden'}
                         onAddNewCard={addCardHandler}
                         onCancel={cancelAddingHandler}  />
        </Fragment>
    )
}

export default MainPage;
