import Card from '../Card/';
import './CardList.css';

const CardList = ({ isDisableMode, getActive, data }) => {
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
                                  getActiveId={getActive}
                    />);
                })
            }
        </div>
    );
}

export default CardList;
