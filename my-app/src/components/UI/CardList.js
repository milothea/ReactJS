import { useSelector } from 'react-redux';
import Card from '../Card/';
import './CardList.css';
import withLoadingDelay from '../HOC/withLoadingDelay';

const CardWithSpinner = withLoadingDelay(Card);

const CardList = ({ isDisableMode }) => {
    const cardsData = useSelector(state => state.cardsData);
    const containerClassName = `cards-container${isDisableMode ? ' disable-mode' : ''}`;

    return (
        <div className={containerClassName}>
            {
                cardsData.map(card => {
                    return <CardWithSpinner key={card.Number}
                                            heading={card.Name}
                                            text={card.About}
                                            id={card.Number}
                                            isDisableMode={isDisableMode}
                                            isActive={card.isActive} />;
                })
            }
        </div>
    );
}

export default CardList;
