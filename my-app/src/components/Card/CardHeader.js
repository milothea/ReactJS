import { useEffect, useState} from 'react';
import './CardHeader.css';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX} from "react-icons/hi";

const CardHeader = ({ editmode, isSubmit, isActive, isDisableMode, id, value }) => {
    const [headingInput, setHeadingInput] = useState(value);
    const [defaultHeading, setDefaultHeading] = useState(value);
    const [checked, setChecked] = useState(false);
    const [isEditMode, setEditMode] = useState(false);

    const headingInputHandler = (event) => setHeadingInput(event.target.value);
    const checkboxHandler = () => {
        setChecked(!checked);
        isActive(!checked);
    };
    const editHandler = () => {
        setChecked(false);
        setEditMode(true);
        editmode(true);
        isSubmit(false);
    };
    const submitHandler = () => {
        setEditMode(false);
        setDefaultHeading(headingInput);
        editmode(false);
        isSubmit(true);
    };
    const cancelHandler = () => {
        setEditMode(false);
        editmode(false);
        setHeadingInput(defaultHeading);
    };

    useEffect(() => {
        cancelHandler();
    }, [isDisableMode]);

    return isEditMode ? (
        <div className='container heading' id={id}>
            <input className='card__heading' value={headingInput} onChange={headingInputHandler} maxLength='15' />
            <HiOutlineCheck className='card__submit' onClick={submitHandler} />
            <HiOutlineX className='card__cancel' onClick={cancelHandler} />
        </div>
    ) : (
        <div className='container heading' id={id}>
            <h2 className='card__heading'>{defaultHeading}</h2>
            { !isDisableMode ? (
                <HiOutlinePencil className='card__edit' fill='red' onClick={editHandler} />
                ) : ''
            }
            <input className='card__checkbox' type='checkbox' onChange={checkboxHandler} checked={checked} />
        </div>
    );
}

export default CardHeader;
