import './Settings.css';
import { useDispatch, useSelector} from 'react-redux';
import { settingsActions } from '../../store/settingsSlice';

const Settings = () => {
    const dispatch = useDispatch();
    const isReadOnly = useSelector(state => state.settings.isReadOnly);

    const changeHandler = () => dispatch(settingsActions.toggleReadMode());

    return (
        <div className='settings-container'>
            <div className='settings__item'>
                <h2 className='settings__heading'>Read only mode</h2>
                <input type='checkbox'
                       id='read-only'
                       onChange={changeHandler}
                       checked={isReadOnly} />
                <label className='settings__label'
                       htmlFor='read-only'>Turn on read only mode</label>
            </div>
        </div>
    )
};

export default Settings;
