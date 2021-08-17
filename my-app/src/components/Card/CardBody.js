import { useCallback, useEffect, useState} from 'react';
import './CardBody.css';

const CardBody = ({ value, isEditMode, isSubmit, isDisableMode }) => {
    const [textInput, setTextInput] = useState(value);
    const [defaultText, setDefaultText] = useState(value);

    const textInputHandler = (event) => setTextInput(event.target.value);
    const cancelHandler = useCallback(() => setTextInput(defaultText), [defaultText]);

    useEffect(() => cancelHandler(), [isDisableMode, cancelHandler]);
    useEffect(() => setDefaultText(textInput),[isSubmit, textInput]);

    return isEditMode ? (
        <textarea className='card__text'
                      onChange={textInputHandler}
                      value={textInput}
                      maxLength='140' />
    ) : (
        <p className='card__text'>{defaultText}</p>
    );
};

export default CardBody;
