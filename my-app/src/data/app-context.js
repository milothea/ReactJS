import React, { useState } from "react";
import CardsData from "./CardsData";
import {v4 as uuidv4} from "uuid";

const AppContext = React.createContext({
    cardsData: CardsData,
    onChangeActiveState: (id) => {},
    onUpdateCardData: (id, newHeading, newText) => {},
    onAddCard: (heading, text) => {},
    onDeleteCard: () => {}
});

export const AppContextProvider = (props) => {
    const [cardsData, setCardsData] = useState(CardsData);

    const changeActiveStateHandler = (id) => setCardsData(prevData => prevData.map(card => {
        if (card.id === id) {
            const prev = {...card};

            prev.isActive = !card.isActive;

            return prev;
        }

        return card;
    }));

    const updateCardDataHandler = (id, newHeading, newText) => setCardsData(prevData => prevData.map(item => {
        if (item.id === id) {
            const data = {...item};

            data.heading = newHeading;
            data.text = newText;

            return data;
        }

        return item;
    }));

    const addCardHandler = (heading, text) => {
        setCardsData(prevData => [...prevData, {
            heading: heading,
            text: text,
            isActive: false,
            id: uuidv4()
        }]);
    };

    const deleteCardHandler = () => {
        setCardsData(prevData => prevData.filter(card => !(card.isActive)));
    };

    return <AppContext.Provider value={
        {
            cardsData: cardsData,
            onChangeActiveState: changeActiveStateHandler,
            onUpdateCardData: updateCardDataHandler,
            onAddCard: addCardHandler,
            onDeleteCard: deleteCardHandler
        }
    }>
        {props.children}
    </AppContext.Provider>;
};

export default AppContext;
