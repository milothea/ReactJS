import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardsActions } from '../store/cardsDataSlice';
import PropTypes from 'prop-types';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({
                  id,
                  isReadOnly,
                  isActive,
                  heading,
                  text
}) => {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const [headingInputValue, setHeadingInputValue] = useState(heading);
    const [textInputValue, setTextInputValue] = useState(text);

    const editHandler = () => {
        setIsEditMode(true);
        if (isActive) dispatch(cardsActions.toggleActiveState({ id: id }));
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
        dispatch(cardsActions.updateCardData({
            id: id,
            newHeading: headingInputValue,
            newText: textInputValue
        }));
    };

    const changeCheckboxHandler = () => dispatch(cardsActions.toggleActiveState({ id: id}));

    useEffect(() => setIsEditMode(false), [isReadOnly]);

    return (
        <div className={`container card${isActive ? ' active' : ''}${isEditMode ? ' editmode' : ''}`}
             id={id}>
            <CardHeader id={id}
                        value={isEditMode ? headingInputValue : heading}
                        isReadOnly={isReadOnly}
                        isActive={isActive}
                        isEditMode={isEditMode}
                        onEdit={editHandler}
                        onChange={headingInputHandler}
                        onCancel={cancelHandler}
                        onSubmit={submitHandler}
                        onChecked={changeCheckboxHandler}
            />
            <CardBody isEditMode={isEditMode}
                      value={isEditMode ? textInputValue : text}
                      onChange={textInputHandler}
            />
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string,
    isReadOnly: PropTypes.bool,
    isActive: PropTypes.bool,
    heading: PropTypes.string,
    text: PropTypes.string,
    onUpdateCardData: PropTypes.func,
    onChangeActiveState: PropTypes.func
};

export default React.memo(Card);
