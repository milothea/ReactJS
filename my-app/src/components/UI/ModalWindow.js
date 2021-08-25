import { useState } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ className, onAddNewCard, onCancel }) => {
    const [headingInputValue, setHeadingInputValue] = useState('');
    const [textInputValue, setTextInputValue] = useState('');

    const cleanInputsHelper = () => {
        setHeadingInputValue('');
        setTextInputValue('');
    }

    const inputHeadingHandler = (event) => setHeadingInputValue(event.target.value);

    const inputTextHandler = (event) => setTextInputValue(event.target.value);

    const submitHandler = () => {
        onAddNewCard(headingInputValue, textInputValue);
        cleanInputsHelper();
    };

    const cancelHandler = () => {
        cleanInputsHelper();
        onCancel();
    }

    const wrapperClickHandler = (event) => {
        if (event.target.className === `modal-window-wrapper ${className}`) onCancel();
    };

    return (
        <div className={`modal-window-wrapper ${className}`} onClick={wrapperClickHandler}>
            <div className='modal-window'>
                <h2 className='modal-window__heading'>Add new card</h2>
                <fieldset className='modal-window__fieldset heading'>
                    <legend className='modal-window__legend'>Add caption</legend>
                    <input className='modal-window__input'
                           type='text'
                           value={headingInputValue}
                           onChange={inputHeadingHandler}
                    />
                </fieldset>
                <fieldset className='modal-window__fieldset'>
                    <legend className='modal-window__legend'>Add description</legend>
                    <textarea className='modal-window__textarea'
                              maxLength='140'
                              value={textInputValue}
                              onChange={inputTextHandler}
                    />
                </fieldset>
                <div className='modal-window__btn-wrap'>
                    <button className='modal-window__btn' onClick={submitHandler}>Add</button>
                    <button className='modal-window__btn' onClick={cancelHandler}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;
