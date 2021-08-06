import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js';

//instial state

const initialState = {
    transactions: []
}

// creating globel context

export const GlobalContext = createContext(initialState)


// Provider component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Creating an action for useReducer

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransactions(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransactions
    }}>
        {children}

    </GlobalContext.Provider>);

}