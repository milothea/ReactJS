import './CardBody.css';

const CardBody = ({ value, isEditMode, onChange }) => {

    return isEditMode ? (
        <textarea className='card__text'
                  value={value}
                  maxLength='140'
                  onChange={onChange} />
    ) : (
        <p className='card__text'>{value}</p>
    );
};

export default CardBody;
