import { useState } from 'react';
import Checkbox from './Checkbox';
import './Card.css';

const Card = (props) => {
  const [className, setClassName] = useState('container card');

  function checkboxHandler(event) {
    if (event.target.checked) {
      setClassName('container card active');
    } else {
      setClassName('container card');
    }
  }

  return (
    <div className={className} id={props.id}>
      <div className='container heading'>
        <h2 className="card__heading">{props.heading}</h2>
        <Checkbox className='card__checkbox' type='checkbox' onChange={checkboxHandler} />
      </div>
      <p className="card__text">{props.text}</p>
    </div>
  );
}

export default Card;
