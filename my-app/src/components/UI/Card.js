import './Card.css';

const Card = (props) => {
  return (
    <div className="container__card" id={props.id}>
      <h2 className="card__heading">{props.heading}</h2>
      <p className="card__text">{props.text}</p>
    </div>
  );
}

export default Card;
