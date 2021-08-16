import { useCallback, useEffect, useState} from 'react';
import './CardBody.css';

const CardBody = (props) => {
    const [textInput, setTextInput] = useState(props.value);
    const [defaultText, setDefaultText] = useState(props.value);

    const textInputHandler = (event) => setTextInput(event.target.value);
    const cancelHandler = useCallback(() => setTextInput(defaultText), [defaultText]);

    useEffect(() => cancelHandler(), [props.isDisableMode, cancelHandler]);
    useEffect(() => setDefaultText(textInput),[props.isSubmit, textInput]);

    return props.isEditMode ? (
        <textarea className='card__text'
                      onChange={textInputHandler}
                      value={textInput}
                      maxLength='140' />
    ) : (
        <p className='card__text'>{defaultText}</p>
    );
};

export default CardBody;
