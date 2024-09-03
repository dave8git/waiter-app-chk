import shortid from 'shortid';

// selectors
// export const getAllTables = state => state.tables; // nie działa bo jest statePart a nie state
export const getAllStatus = state => Array.from(new Set(state.tables.map(obj => obj.status)));
export const getTable = (state, id) => state.tables.find(table => table.id === id);
// można prościej, używając destrukturyzacji: export const getAllStatus = state => new Set(state.tables.map(({ status }) => status));

// action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload }); 
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = (dispatch) => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
          .then(res => res.json())
          .then(tables => dispatch(updateTables(tables))); // akcja updateTables(tables) będzie odpalona dopiero kiedy będą 
          // dane, funkcja fetchTables to tylko funkcja pośrednik, która ma tą akcję w odpowiednim momencie (po fetchu danych)
          // uruchomić. 
      }
}

export const editTableRequest = (data) => {
    return (dispatch) => {
        const options = {
            method: 'PUT', 
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({}),
        };

        fetch('http://localhost:3131/books', options)
            .then(() => dispatch(editTable({})))
    }
}

const reducer = (statePart = [], action) => {
    console.log('action.payload', action.payload);
    switch(action.type) {
        // case EDIT_TABLE: 
        //     return 
        case UPDATE_TABLES: 
            console.log('action.payload z akcji', action.payload);
            return [ ...action.payload ]; // nadpisanie całej tablicy tables w stanie
        
        default: 
            return statePart;
        }
}

export default reducer; 