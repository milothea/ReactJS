import './CardHeader.css';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX} from "react-icons/hi";

const CardHeader = ({
                        isActive,
                        isEditMode,
                        isReadOnly,
                        value,
                        onEdit,
                        onChange,
                        onCancel,
                        onSubmit,
                        onChecked
                    }) => {
    return isEditMode ? (
        <div className='container heading'>
            <input className='card__heading'
                   defaultValue={value}
                   maxLength='15'
                   onChange={onChange}
                   data-testid='input' />
            <HiOutlineCheck className='card__submit'
                            onClick={onSubmit}
                            data-testid='submit-icon' />
            <HiOutlineX className='card__cancel'
                        onClick={onCancel}
                        data-testid='cancel-icon' />
        </div>
    ) : (
        <div className='container heading'>
            <h2 className='card__heading'>{value}</h2>
            { !isReadOnly ? (
                <HiOutlinePencil className='card__edit'
                                 fill='red'
                                 onClick={onEdit}
                                 data-testid='edit-icon'/>
                ) : ''
            }
            <input className='card__checkbox'
                   type='checkbox'
                   defaultChecked={isActive}
                   onChange={onChecked}
                   data-testid='checkbox' />
        </div>
    );
}

export default CardHeader;
