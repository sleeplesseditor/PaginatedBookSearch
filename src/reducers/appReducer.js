import { 
    FETCH_DATA_SUCCESS,
    SEARCH_FILTERS,
    UPDATE_INDEX, 
    UPDATE_INDEX_VALUE 
} from '../actions/types';

const initialState = {
    books: [],
    count: 0,
    activeFilter: [],
    index: 1,
    indexMax: 243,
    searchInput: '',
    initialLoad: true,
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                books: action.payload.data.books,
                index: action.indexValue,
                initialLoad: false,
            };
        case SEARCH_FILTERS: 
            return {
                ...state,
                books: action.payload.data.books,
            };
        case UPDATE_INDEX:
            return {
                ...state,
                index: action.payload.index,
            };
        case UPDATE_INDEX_VALUE:
            return {
                ...state,
                books: action.payload.data.books
            };
        default:
            return state;
    }
}