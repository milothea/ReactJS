import Card from '../Card/';
import './CardList.css';
import withLoadingDelay from '../HOC/withLoadingDelay';

const CardWithSpinner = withLoadingDelay(Card);

const CardList = ({
                      isDisableMode,
                      getActiveCards,
                      data,
                      onUpdateCardData,
                      onChangeActiveState
}) => {
    const containerClassName = `cards-container${isDisableMode ? ' disable-mode' : ''}`;

    return (
        <div className={containerClassName}>
            {
                data.map(card => {
                    return <CardWithSpinner key={card.id}
                                            heading={card.heading}
                                            text={card.text}
                                            id={card.id}
                                            isDisableMode={isDisableMode}
                                            isActive={card.isActive}
                                            getActiveCards={getActiveCards}
                                            onUpdateCardData={onUpdateCardData}
                                            onChangeActiveState={onChangeActiveState} />;
                })
            }
        </div>
    );
}

export default CardList;
