import Card from '../Card/Card';
import './CardList.css';

const CardList = (props) => {
    const containerClassName = `cards-container${props.isDisableMode ? ' disable-mode' : ''}`;

    return (
        <div className={containerClassName}>
            {
                props.data.map(card => {
                    return(<Card key={card.id}
                                 heading={card.heading}
                                 text={card.text}
                                 id={card.id}
                                 isDisableMode={props.isDisableMode}
                                 getActiveId={props.getActive}
                    />);
                })
            }
        </div>
    );
}

export default CardList;
