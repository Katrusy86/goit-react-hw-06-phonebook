import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit'
import types from './types'
import actions from './actions'


// const contacts = (state=[], {type, payload}) => {
//     switch(type) {
//         case types.ADD_CONTACT:
//             return [...state, payload]

//         case types.DELETE_CONTACT:
//             return state.filter(contact => contact.id !== payload.id)
//         default:
//             return state
//     }
// };

// const filter = (state='', {type,payload})=> {
//     switch (type) {
//         case types.FILTER_CONTACT:
//             return payload.filter
//         default:
//             return state
//     }
// };


// =====================Toolkit==================

const contacts = createReducer ([], {
    [actions.addContact]: (state, action) =>[...state, action.payload],
    [actions.deleteContact]: (state, action) =>state.filter(contact => contact.id !== action.payload)
})

const filter = createReducer ('', {
    [actions.filterContact]:(state, action)=>action.payload
})

// ==============================================

export default combineReducers ({
    contacts,
    filter,
})