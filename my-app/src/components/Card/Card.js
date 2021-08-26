import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({
                  id,
                  isDisableMode,
                  isActive,
                  heading,
                  text,
                  onUpdateCardData,
                  onChangeActiveState
}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [headingInputValue, setHeadingInputValue] = useState(heading);
    const [textInputValue, setTextInputValue] = useState(text);

    const editHandler = () => {
        setIsEditMode(true);
        if (isActive) onChangeActiveState(id);
    };

    const headingInputHandler = (event) => setHeadingInputValue(event.target.value);

    const textInputHandler = (event) => setTextInputValue(event.target.value);

    const cancelHandler = () => {
        setIsEditMode(false);
        setHeadingInputValue(heading);
        setTextInputValue(text);
    };

    const submitHandler = () => {
        setIsEditMode(false);
        onUpdateCardData(id, headingInputValue, textInputValue);
    };

    useEffect(() => setIsEditMode(false), [isDisableMode]);

    return (
        <div className={`container card${isActive ? ' active' : ''}${isEditMode ? ' editmode' : ''}`}
             id={id} >
            <CardHeader id={id}
                        value={isEditMode ? headingInputValue : heading}
                        isDisableMode={isDisableMode}
                        isActive={isActive}
                        isEditMode={isEditMode}
                        onEdit={editHandler}
                        onChange={headingInputHandler}
                        onCancel={cancelHandler}
                        onSubmit={submitHandler}
                        onUpdateCardData={onUpdateCardData}
                        onChangeActiveState={onChangeActiveState}
            />
            <CardBody isEditMode={isEditMode}
                      value={isEditMode ? textInputValue : text}
                      onChange={textInputHandler}
            />
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number,
    isDisableMode: PropTypes.bool,
    isActive: PropTypes.bool,
    heading: PropTypes.string,
    text: PropTypes.string,
    onUpdateCardData: PropTypes.func,
    onChangeActiveState: PropTypes.func
};

export default React.memo(Card);
