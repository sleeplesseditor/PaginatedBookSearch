import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchField from '../components/SearchField/SearchField';
import ResultsList from '../components/Results/ResultsList';
import PaginationBar from '../components/PaginationBar/PaginationBar';
import history from '../history';

const Main = (props) => {
    const [bookData, setBookData] = useState([]);

    const { activeFilter, books, index, indexMax, initialLoad } = props.main;
    
    useLayoutEffect(() => {
        const initialPageNumber = 1;
        const historyPageNumber = history.location.pathname.slice(1);

        if (initialPageNumber !== historyPageNumber) {
            props.fetchData(initialPageNumber, activeFilter);
        }
        props.fetchData(historyPageNumber, activeFilter);

        setBookData(books);
    }, [initialLoad]);

    useEffect(() => {
        setBookData(books);
    }, [books])

    return (
        <div className="container">
            <SearchField />
            <ResultsList 
                books={bookData} 
            />
            <PaginationBar 
                index={index} 
                indexMax={indexMax}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return { main: state.main };
}

export default connect(mapStateToProps, actions)(Main);