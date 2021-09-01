import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

const AppContext = React.createContext({
    cardsData: [],
    isLoggedIn: false,
    paths: {},
    onChangeActiveState: (id) => {},
    onUpdateCardData: (id, newHeading, newText) => {},
    onAddCard: (heading, text) => {},
    onDeleteCard: () => {},
    onSignIn: () => {}
});

export const AppContextProvider = (props) => {
    const [cardsData, setCardsData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const paths = {
        mainPage: '/',
        errorPage: '/error',
        authPage: '/authorisation'
    }

    useEffect(() => {
        if (isLoggedIn) {
            axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
                .then((res) => {
                    let data = [...res.data.slice(0, 15)];

                    data = data.map((datum) => {
                        const newDatum = {...datum};

                        newDatum.isActive = false;

                        return newDatum
                    });

                    setCardsData(data);
                })
                .catch((err) => new Error(`Something went wrong. Error: ${err}`));
        }
    }, [isLoggedIn]);

    const signInHelper = () => setIsLoggedIn((prevState) => !prevState);

    const changeActiveStateHandler = (id) => setCardsData(prevData => prevData.map(card => {
        if (card.Number === id) {
            const prev = {...card};

            prev.isActive = !card.isActive;

            return prev;
        }

        return card;
    }));

    const updateCardDataHandler = (id, newHeading, newText) => setCardsData(prevData => prevData.map(item => {
        if (item.Number === id) {
            const data = {...item};

            data.Name = newHeading;
            data.About = newText;

            return data;
        }

        return item;
    }));

    const addCardHandler = (heading, text) => {
        setCardsData(prevData => [...prevData, {
            Name: heading,
            About: text,
            isActive: false,
            Number: uuidv4()
        }]);
    };

    const deleteCardHandler = () => {
        setCardsData(prevData => prevData.filter(card => !(card.isActive)));
    };

    return <AppContext.Provider value={
        {
            cardsData: cardsData,
            isLoggedIn: isLoggedIn,
            paths: paths,
            onChangeActiveState: changeActiveStateHandler,
            onUpdateCardData: updateCardDataHandler,
            onAddCard: addCardHandler,
            onDeleteCard: deleteCardHandler,
            onSignIn: signInHelper
        }
    }>
        {props.children}
    </AppContext.Provider>;
};

export default AppContext;
