import React, { useState } from 'react';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX } from 'react-icons/hi';
import './Card.css';

const Card = (props) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [headingValue, setHeadingValue] = useState(props.heading);
  const [defaultHeading, setDefaultHeading] = useState(props.heading);
  const [textValue, setTextValue] = useState(props.text);
  const [defaultText, setDefaultText] = useState(props.text);

  const checkboxHandler = () => setChecked(!checked);
  const editHandler = () => setEditMode(!isEditMode);
  const inputHandler = (event) => {
    const target = event.target;

    (target.id === 'heading') ? setHeadingValue(target.value) : setTextValue(target.value);
  };
  const submitHandler = () => {
    setChecked(false);
    editHandler();
    setDefaultHeading(headingValue);
    setDefaultText(textValue);
  };
  const cancelHandler = () => {
    setChecked(false);
    editHandler();
    setHeadingValue(defaultHeading);
    setTextValue(defaultText);
  };

  if (isEditMode) {
    return (
      <div className='container card editmode' id={props.id}>
        <div className='container heading'>
          <input className='card__heading' id='heading' value={headingValue} onChange={inputHandler} maxLength='15'/>
          <HiOutlineCheck className='card__submit' onClick={submitHandler} />
          <HiOutlineX className='card__cancel' onClick={cancelHandler} />
        </div>
        <textarea className="card__text" maxLength='140' onChange={inputHandler} value={textValue}/>
      </div>
    );
  }

  return (
    <div className={`container card${(checked && !isEditMode) ? ' active' : ''}`} id={props.id}>
      <div className='container heading'>
        <h2 className='card__heading'>{defaultHeading}</h2>
        <HiOutlinePencil className='card__edit' fill='red' onClick={editHandler} />
        <input className='card__checkbox' type='checkbox' onChange={checkboxHandler} value={checked} />
      </div>
     <p className="card__text">{defaultText}</p>
    </div>
  );
}

export default Card;
