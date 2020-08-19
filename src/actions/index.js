import { 
    FETCH_DATA_SUCCESS,
    SEARCH_FILTERS,
    UPDATE_INDEX,
    UPDATE_INDEX_VALUE
} from './types';
import axios from 'axios';
import history from '../history';

export function fetchData(pageNumber, filterContent){
    try {
        const request = axios.post('http://nyx.vima.ekt.gr:3000/api/books', {
            page: pageNumber,
            itemsPerPage: 10,
            filters: filterContent
        })
        return {
            type: FETCH_DATA_SUCCESS,
            indexValue: pageNumber,
            payload: request
        };
    } catch (error) {
        console.log(error);
    }
}

export const updateIndexValue = (indexValue) => {
    const updatedBooks = axios.post('http://nyx.vima.ekt.gr:3000/api/books', {
        page: indexValue.index,
        itemsPerPage: 10,
        filters: []
    });

    let path = '/' + indexValue.index.toString();
    history.push(path);
    
    return {
        type: UPDATE_INDEX_VALUE,
        payload: updatedBooks
    }
}

export const updateIndex = (indexValue) => {

    return {
        type: UPDATE_INDEX,
        payload: indexValue
    }
}

export const searchFilters = (searchText) => {
        try {
            const request = axios.post('http://nyx.vima.ekt.gr:3000/api/books', {
                page: 1,
                itemsPerPage: 10,
                filters: [{type: "all", values: [`${searchText}`]}]
            })
            return {
                type: SEARCH_FILTERS,
                payload: request
            };
        } catch (error) {
            console.log(error);
        }
}