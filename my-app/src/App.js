import './App.css';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppContext from './data/app-context';
import Header from './components/UI/Header';
import MainPage from './components/UI/pages/MainPage';
import ErrorPage from './components/UI/pages/ErrorPage';
import SignInPage from './components/UI/pages/SignInPage';

const App = () => {
    const context = useContext(AppContext);

    return (
        <div className='react-app'>
            <Header title='Notes' />
            <Switch>
                <Route path='/' exact>
                    {
                        context.isLoggedIn ? (
                            <Redirect to={context.paths.mainPage} />
                        ) : (
                            <Redirect to={context.paths.authPage} />
                        )
                    }
                    </Route>
                <Route path={context.paths.errorPage}>
                    <ErrorPage />
                </Route>
                <Route path={context.paths.mainPage}>
                    <MainPage />
                </Route>
                <Route path={context.paths.authPage}>
                    <SignInPage />
                </Route>
                <Route component={ ErrorPage }/>
            </Switch>
        </div>
    );
}

export default App;
