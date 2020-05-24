import { uuid } from 'uuidv4';
import types from './types'
import { createAction, createStore } from '@reduxjs/toolkit';


// const addContact = (value) => ({
//     type:types.ADD_CONTACT,
//     payload:{
//             id: uuid(),
//             name:value.name,
//             number:value.number
//     }
// })


// const deleteContact = id => ({
//     type:types.DELETE_CONTACT,
//     payload: {id}
// })


// const filterContact = filter =>({
//     type:types.FILTER_CONTACT,
//     payload:{
//         filter
//     }
// })


// ============Toolkit====================

const addContact = createAction('contacts/add',value => ({
    payload:{
            id: uuid(),
            name:value.name,
            number:value.number
    }
}))

const deleteContact = createAction('contacts/delete')

const filterContact = createAction('contacts/filterContact')

// =====================================


export default { addContact, deleteContact, filterContact }