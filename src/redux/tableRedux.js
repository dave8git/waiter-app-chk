import shortid from 'shortid';

// selectors
export const getAllTables = state => state.tables;

// action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const EDIT_TABLES = createActionName('EDIT_TABLE');

// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload }); 
export const editTables = payload => ({ type: EDIT_TABLE, payload });

const reducer = (statePart = [], action) => {
    switch(action.type) {
        case EDIT_TABLE: 
            return 
        case UPDATE_TABLE: 
            return [ ...action.payload ]; // nadpisanie całej tablicy tables w stanie
    }
}

export default reducer; 