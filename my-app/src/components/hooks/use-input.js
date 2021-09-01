import { useState } from 'react';

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(inputValue);
    const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = (event) => setInputValue(event.target.value);

    const inputBlurHandler = () => setIsTouched(true);

    const resetHandler = () => {
      setInputValue('');
      setIsTouched(false);
    };

    return {
        value: inputValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        resetHandler: resetHandler
    }
};

export default useInput;

