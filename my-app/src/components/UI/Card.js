import { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [checked, setChecked] = useState(false);

  const checkboxHandler = () => setChecked(!checked);

  return (
    <div className={'container card' + (checked ? ' active' : '')} id={props.id}>
      <div className='container heading'>
        <h2 className="card__heading">{props.heading}</h2>
        <input className='card__checkbox' type='checkbox' onChange={checkboxHandler} />
      </div>
      <p className="card__text">{props.text}</p>
    </div>
  );
}

export default Card;
