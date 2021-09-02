import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import axios from "axios";

const initialState = {
    data: [],
    dispatchDetails: null
};

const cardsDataSlice = createSlice({
    name: 'cardsData',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload.data;
        },
        updateCardData(state, action) {
            state.data = state.data.map(card => {
                if (card.Number === action.payload.id) {
                    const data = {...card};

                    data.Name = action.payload.newHeading;
                    data.About = action.payload.newText;

                    return data;
                }

                return card;
            });
        },
        toggleActiveState(state, action) {
            state.data = state.data.map(card => {
                if (card.Number === action.payload.id) {
                    const prev = {...card};

                    prev.isActive = !card.isActive;

                    return prev;
                }

                return card;
            });
        },
        deleteCards(state) {
            state.data = state.data.filter(card => !(card.isActive));
        },
        addCard(state, action) {
            state.data = [...state.data, {
                Name: action.payload.heading,
                About: action.payload.text,
                isActive: false,
                Number: uuidv4()
            }];
        },
        clearCardsData(state) {
            state.data = [];
        }
    }
});

export const fetchCardsData = () => {
    return (dispatch) => {
        axios.get(
            'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
        )
            .then((res) => {
                let data = [...res.data.slice(0, 15)];

                data = data.map((datum) => {
                    const newDatum = {...datum};

                    newDatum.isActive = false;

                    return newDatum
                });

                dispatch(cardsActions.setData({ data: data}));
            })
            .catch((err) => new Error(`Something went wrong. Error: ${err}`));
    };
}

export const cardsActions = cardsDataSlice.actions;

export default cardsDataSlice;
