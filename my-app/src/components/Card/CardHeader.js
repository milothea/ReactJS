import './CardHeader.css';
import { useDispatch } from 'react-redux';
import { HiOutlineCheck, HiOutlinePencil, HiOutlineX} from "react-icons/hi";

const CardHeader = ({
                        isActive,
                        isEditMode,
                        isDisableMode,
                        id,
                        value,
                        onEdit,
                        onChange,
                        onCancel,
                        onSubmit
                    }) => {
    const dispatch = useDispatch();

    return isEditMode ? (
        <div className='container heading'>
            <input className='card__heading'
                   value={value}
                   maxLength='15'
                   onChange={onChange}/>
            <HiOutlineCheck className='card__submit' onClick={onSubmit} />
            <HiOutlineX className='card__cancel'  onClick={onCancel}/>
        </div>
    ) : (
        <div className='container heading'>
            <h2 className='card__heading'>{value}</h2>
            { !isDisableMode ? (
                <HiOutlinePencil className='card__edit'
                                 fill='red'
                                 onClick={onEdit} />
                ) : ''
            }
            <input className='card__checkbox'
                   type='checkbox'
                   checked={isActive}
                   onChange={() => dispatch({
                       type: 'cardsData/switchActiveState',
                       payload: {
                           id: id
                       }
                   })} />
        </div>
    );
}

export default CardHeader;
