import { useContext } from 'react';
import AppContext from '../../data/app-context';
import Card from '../Card/';
import './CardList.css';
import withLoadingDelay from '../HOC/withLoadingDelay';

const CardWithSpinner = withLoadingDelay(Card);

const CardList = ({ isDisableMode }) => {
    const context = useContext(AppContext);
    const containerClassName = `cards-container${isDisableMode ? ' disable-mode' : ''}`;

    return (
        <div className={containerClassName}>
            {
                context.cardsData.map(card => {
                    return <CardWithSpinner key={card.id}
                                            heading={card.heading}
                                            text={card.text}
                                            id={card.id}
                                            isDisableMode={isDisableMode}
                                            isActive={card.isActive}
                                            onUpdateCardData={context.onUpdateCardData}
                                            onChangeActiveState={context.onChangeActiveState} />;
                })
            }
        </div>
    );
}

export default CardList;
