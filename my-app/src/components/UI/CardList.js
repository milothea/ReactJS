import { useSelector } from 'react-redux';
import Card from '../Card/';
import './CardList.css';
import withLoadingDelay from '../HOC/withLoadingDelay';

const CardWithSpinner = withLoadingDelay(Card);

const CardList = () => {
    const cardsData = useSelector(state => state.cardsData.data);
    const isReadOnly = useSelector(state => state.settings.isReadOnly);
    const containerClassName = `cards-container${isReadOnly ? ' disable-mode' : ''}`;

    return (
        <div className={containerClassName}>
            {
                cardsData.map(card => {
                    return <CardWithSpinner key={card.Number}
                                            heading={card.Name}
                                            text={card.About}
                                            id={card.Number}
                                            isReadOnly={isReadOnly}
                                            isActive={card.isActive} />;
                })
            }
        </div>
    );
}

export default CardList;
