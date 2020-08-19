import React from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const PagingBar = ({ index, indexMax, updateIndex, updateIndexValue }) => {  
    const firstPage = () => {
        updateIndex({ index: 1 });
        updateIndexValue({ index: 1 });
    }

    const lastPage = () => {
        updateIndex({ index: indexMax });
        updateIndexValue({ index: indexMax });
    }

    const nextPage = () => {
        if (index < indexMax)
        updateIndex({ index: ++index });
        updateIndexValue({ index });
    }

    const previousPage = () => {
    if (index > 1)
        updateIndex({ index: --index });
        updateIndexValue({ index });
    }

    return (
      <Pagination className="justify-content-center">
        <Pagination.First onClick={firstPage}/>
        <Pagination.Prev onClick={previousPage}/>
        <Pagination.Item active>{index}</Pagination.Item>
        <Pagination.Next onClick={nextPage}/>
        <Pagination.Last onClick={lastPage}/>
      </Pagination>
    );
}

function mapStateToProps(state) {
    return { main: state.main };
}

export default connect(mapStateToProps, actions)(PagingBar);