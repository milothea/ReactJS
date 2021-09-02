import './App.css';

import { useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsData } from './components/store/cardsDataSlice';
import { authActions } from './components/store/authSlice';
import Header from './components/UI/Header';
import MainPage from './components/UI/pages/MainPage';
import ErrorPage from './components/UI/pages/ErrorPage';
import SignInPage from './components/UI/pages/SignInPage';
import Settings from './components/UI/pages/Settings';

const App = () => {
    const paths = useSelector(state => state.settings.appPaths);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        const isUser = localStorage.getItem('user');

        if (isUser != null) {
            dispatch(authActions.logIn(JSON.parse(isUser)));
        }
    }, [dispatch]);

    useEffect(() => {
        if(isLoggedIn) dispatch(fetchCardsData());
    }, [isLoggedIn, dispatch])

    return (
        <div className='react-app'>
            <Header />
            <Switch>
                <Route path={paths.mainPage} exact>
                    {
                        isLoggedIn ?
                            <MainPage />
                            :
                            <Redirect to={paths.authPage} />
                    }
                </Route>
                <Route path={paths.authPage}>
                    {
                        isLoggedIn ?
                            <Redirect to={paths.mainPage} />
                            :
                            <SignInPage />
                    }
                </Route>
                <Route path={paths.settings}>
                    <Settings />
                </Route>
                <Route component={ ErrorPage }/>
            </Switch>
        </div>
    );
}

export default App;
