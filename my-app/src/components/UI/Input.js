import './Input.css';

const Input = ({ type, legend, isValid, onChange, onBlur }) => {
    return (
        <fieldset className={`form__fieldset${isValid ? '' : ' invalid-data' }`}>
            <legend className='form__legend'>{legend}</legend>
            <input className='form__input'
                   type={type}
                   onChange={onChange}
                   onBlur={onBlur} />
        </fieldset>
    )
};

export default Input;
