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

    const outerNextPage = () => {
        if (index < indexMax)
        updateIndex({ index: index + 2 });
        updateIndexValue({ index: index + 2 });
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

    const outerpreviousPage = () => {
        if (index > 1)
        updateIndex({ index: index - 2 });
        updateIndexValue({ index: index - 2 });
    }

    return (
      <Pagination className="justify-content-center">
        <Pagination.First onClick={firstPage}/>
        <Pagination.Prev onClick={previousPage}/>
        {index > 2 ? (
            <>
            <Pagination.Item onClick={outerpreviousPage}>{index - 2}</Pagination.Item>
            <Pagination.Item onClick={previousPage}>{index - 1}</Pagination.Item>
            </>
        ) : null}
        <Pagination.Item className="pagination-btn-active" active>{index}</Pagination.Item>
        {index < indexMax ? (
            <>
            <Pagination.Item onClick={nextPage}>{(+index) + 1}</Pagination.Item>
            <Pagination.Item onClick={outerNextPage}>{(+index) + 2}</Pagination.Item>
            </>
        ) : null}
        <Pagination.Next onClick={nextPage}/>
        <Pagination.Last onClick={lastPage}/>
      </Pagination>
    );
}

function mapStateToProps(state) {
    return { main: state.main };
}

export default connect(mapStateToProps, actions)(PagingBar);