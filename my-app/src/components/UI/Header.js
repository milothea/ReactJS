import { useDispatch, useSelector} from 'react-redux';
import { NavLink, useHistory} from 'react-router-dom';
import { authActions } from '../store/authSlice';
import './Header.css';
import {cardsActions} from "../store/cardsDataSlice";

const Header = () => {
    const paths = useSelector(state => state.settings.appPaths);
    const cardsData = useSelector(state => state.cardsData.data);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const username = useSelector(state => state.auth.user.username);
    const isAdmin =useSelector(state => state.auth.user.isAdmin) || false;
    const dispatch = useDispatch();
    const history = useHistory();

    const signOutHandler = () => {
        dispatch(authActions.logOut());
        dispatch(cardsActions.clearCardsData());
        localStorage.removeItem('user');
        history.replace(paths.authPage);
    }

    return (
        <header className='app-header'>
            <ul className='app-header__routing'>
                <li className='app-header__rout-item'>
                    <NavLink className='app-header__routing-link'
                             activeClassName='active-routing'
                             exact to={paths.mainPage}>Home</NavLink>
                </li>
                <li className='app-header__rout-item'>
                    {
                        isLoggedIn ? (
                            <p className='app-header__routing-link'
                                  onClick={signOutHandler}>
                                Sign out
                            </p>
                        ) : (
                            <NavLink className='app-header__routing-link'
                                     activeClassName='active-routing'
                                     to={paths.authPage}>
                                Sign in
                            </NavLink>
                        )
                    }
                </li>
                {
                    isAdmin ? (
                        <li className='app-header__rout-item'>
                            <NavLink className='app-header__routing-link'
                                     activeClassName='active-routing'
                                     to={paths.settings}>Settings</NavLink>
                        </li>
                    ) : ('')
                }
            </ul>
            <h1 className='app-header__heading'>
                { isLoggedIn ? `Hello, ${username.replace(/@[a-z.]+$/gi, '')}` : 'Notes App'}
            </h1>
            <div className='app-header__counter-wrapper'>
                <h3>Total cards:
                    <span className='app-header__counter'>
                        {cardsData.length}
                    </span>
                </h3>
            </div>
        </header>
    );
}

export default Header;
