import Card from '../Card/';
import './CardList.css';

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
                    return(<Card key={card.id}
                                 heading={card.heading}
                                 text={card.text}
                                 id={card.id}
                                 isDisableMode={isDisableMode}
                                 isActive={card.isActive}
                                 getActiveCards={getActiveCards}
                                 onUpdateCardData={onUpdateCardData}
                                 onChangeActiveState={onChangeActiveState}

                    />);
                })
            }
        </div>
    );
}

export default CardList;
