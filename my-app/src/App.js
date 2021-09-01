import './App.css';
import { useEffect } from 'react';
// import React from 'react';
import axios from 'axios';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/UI/Header';
import MainPage from './components/UI/pages/MainPage';
import ErrorPage from './components/UI/pages/ErrorPage';
import SignInPage from './components/UI/pages/SignInPage';

const App = () => {
    const paths = useSelector(state => state.appPaths);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoggedIn) {
            axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
                .then((res) => {
                    let data = [...res.data.slice(0, 15)];

                    data = data.map((datum) => {
                        const newDatum = {...datum};

                        newDatum.isActive = false;

                        return newDatum
                    });

                    dispatch({
                        type: 'cardsData/setData',
                        payload: {
                            data: data
                        }
                    })
                })
                .catch((err) => new Error(`Something went wrong. Error: ${err}`));
        }
    })

    return (
        <div className='react-app'>
            <Header title='Notes' />
            <Switch>
                <Route path={paths.mainPage} exact>
                    {
                        isLoggedIn ? (
                            <MainPage />
                        ) : (
                            <Redirect to={paths.authPage} />
                        )
                    }
                </Route>
                <Route path={paths.authPage}>
                    <SignInPage />
                </Route>
                <Route component={ ErrorPage }/>
            </Switch>
        </div>
    );
}

export default App;
