import './CardBody.css';

const CardBody = ({ value, isEditMode, onChange }) => {

    return isEditMode ? (
        <textarea className='card__text'
                  value={value}
                  maxLength='140'
                  onChange={onChange}
                  data-testid='textarea' />
    ) : (
        <p className='card__text'
           data-testid='paragraph'>{value}</p>
    );
};

export default CardBody;
