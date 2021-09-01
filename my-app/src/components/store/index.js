import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const defaultState = {
    appPaths: {
        mainPage: '/',
        errorPage: '/error',
        authPage: '/authorisation'
    },
    cardsData: [],
    isLoggedIn: false
};

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'cardsData/setData':
            state.cardsData = action.payload.data;
            return state;
        case 'cardsData/updateCardData':
            state.cardsData = state.cardsData.map(card => {
               if (card.Number === action.payload.id) {
                   const data = {...card};

                   data.Name = action.payload.newHeading;
                   data.About = action.payload.newText;

                   return data;
               }

               return card;
            });

            return state;
        case 'cardsData/switchActiveState':
            state.cardsData = state.cardsData.map(card => {
                if (card.Number === action.payload.id) {
                    const prev = {...card};

                    prev.isActive = !card.isActive;

                    return prev;
                }

                return card;
            });

            return state;
        case 'cardsData/deleteCards':
            state.cardsData = state.cardsData.filter(card => !(card.isActive));

            return state;
        case 'cardsData/addCard':
            state.cardsData = [...state.cardsData, {
                Name: action.payload.heading,
                About: action.payload.text,
                isActive: false,
                Number: uuidv4()
            }];

            return state;
        case 'authorization/login':
            state.isLoggedIn = true;

            return state;
        default:
            return state;
    }
};

const store = createStore(appReducer);

export default store;
