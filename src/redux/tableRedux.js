import shortid from 'shortid';
import initialState from './initialState';

// selectors
// export const getAllTables = state => state.tables; // nie działa bo jest statePart a nie state
export const getAllStatus = state => Array.from(new Set(state.tables.map(obj => obj.status)));
export const getTable = (state, id) => state.tables.find(table => table.id === id);
// można prościej, używając destrukturyzacji: export const getAllStatus = state => new Set(state.tables.map(({ status }) => status));

// action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');
const SET_LOADING = createActionName('SET_LOADING');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload }); 
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const setLoading = payload => ({ type: SET_LOADING, payload});

export const fetchTables = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        fetch('http://localhost:3131/api/tables')
          .then(res => res.json())
          .then(tables => dispatch(updateTables(tables))) // akcja updateTables(tables) będzie odpalona dopiero kiedy będą 
          .then(() => dispatch(setLoading(false))); // wykonujemy akcję updateTables(tables) potem setLoading(false) dzięki temu, że mamy thunka możemy wykonać więcej akcji niż jedną przekazaną przez dispatch z jakiegoś komponentu
          // THUNK POZWALA NA WYKONANIE WIĘKSZEJ ILOŚCI AKCJI!!!! 
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

// jak będzie wyglądał statePart: 
// {
//     loading: true || false,
//     data: tables, // tablica stolików
// }

const reducer = (statePart = initialState.tables, action) => {
    console.log('action', action);
    switch(action.type) {
        // case EDIT_TABLE: 
        //     return 
        case SET_LOADING:
            return { ...statePart, loading: action.payload };
        case UPDATE_TABLES: 
            console.log('action.payload z akcji', action.payload);
            return { ...statePart, data: action.payload}; // nadpisanie całej tablicy tables w stanie
        
        default: 
            console.log('jesteśmy tutaj!', initialState);
            return statePart;
        }
}

export default reducer; 