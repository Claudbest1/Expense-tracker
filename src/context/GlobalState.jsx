import React, { createContext, useReducer } from 'react'
import AppReducers from './AppReducer'
import Transaction from '../components/Transaction'

//Initial State
const initialState = {
    transactions: []
}

//Creat Context

export const GlobalContext = createContext(initialState)

// Provider conponent
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducers, initialState)

    //Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
      })
    }
    
 const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
      })
  }



    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
            }}>
        {children}
        </GlobalContext.Provider>
    )
}