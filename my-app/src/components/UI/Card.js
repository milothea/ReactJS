import React, { useState } from 'react';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX } from 'react-icons/hi';
import './Card.css';

const Card = (props) => {
    const [checked, setChecked] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [headingInput, setHeadingInput] = useState(props.heading);
    const [defaultHeading, setDefaultHeading] = useState(props.heading);
    const [textInput, setTextInput] = useState(props.text);
    const [defaultText, setDefaultText] = useState(props.text);

    const checkboxHandler = () => setChecked(!checked);
    const editHandler = () => {
        setChecked(false);
        setEditMode(true);
    };
    const headingInputHandler = (event) => setHeadingInput(event.target.value);
    const textInputHandler = (event) => setTextInput(event.target.value);
    const submitHandler = () => {
        setEditMode(false);
        setDefaultHeading(headingInput);
        setDefaultText(textInput);
    };
    const cancelHandler = () => {
        setEditMode(false);
        setHeadingInput(defaultHeading);
        setTextInput(defaultText);
    };

    return isEditMode ? (
        <div className='container card editmode' id={props.id}>
            <div className='container heading'>
                <input className='card__heading'
                       id='heading'
                       value={headingInput}
                       onChange={headingInputHandler}
                       maxLength='15'/>
                <HiOutlineCheck className='card__submit'
                                onClick={submitHandler} />
                <HiOutlineX className='card__cancel'
                            onClick={cancelHandler} />
            </div>
            <textarea className='card__text'
                      onChange={textInputHandler}
                      value={textInput}
                      maxLength='140' />
        </div>
    ) : (
        <div className={`container card${checked ? ' active' : ''}`}
             id={props.id}>
            <div className='container heading'>
                <h2 className='card__heading'>{defaultHeading}</h2>
                <HiOutlinePencil className='card__edit'
                                 fill='red'
                                 onClick={editHandler} />
                <input className='card__checkbox'
                       type='checkbox'
                       onChange={checkboxHandler}
                       value={checked} />
            </div>
            <p className='card__text'>{defaultText}</p>
        </div>
    );
}

export default Card;
