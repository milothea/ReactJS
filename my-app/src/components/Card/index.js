import { useEffect, useState} from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({ id, isDisableMode, heading, text, getActiveId }) => {
    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const getActiveState = () => setIsActive(prevState => !prevState);

    const isEditMode = (state) =>  setEditMode(state);

    const checkSubmit = (state) => setIsSubmit(state);

    useEffect(() => getActiveId(id, isActive), [isActive]);

    return (
        <div className={`container card${isActive ? ' active' : ''}${editMode ? ' editmode' : ''}`} >
            <CardHeader isDisableMode={isDisableMode}
                        value={heading}
                        editmode={isEditMode}
                        isSubmit={checkSubmit}
                        isActive={getActiveState}
                        id={id}
            />
            <CardBody isEditMode={editMode}
                      isDisableMode={isDisableMode}
                      isSubmit={isSubmit}
                      value={text}
            />
        </div>
    );
}

export default Card;
