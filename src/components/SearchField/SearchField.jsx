import React from "react";
import { FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SearchField = ({ index, indexMax, searchFilters, updateIndex, updateIndexValue }) => {
  
    const updateTextInput = (event) => {
        updateIndex({ index: 1 });
        updateIndexValue({ index: 1 });
        return searchFilters(event.target.value);
    }

    return (
      <InputGroup>
        <FormControl
            aria-label="Book Search"
            type="text"
            placeholder="Search for Books Here..."
            onChange={updateTextInput}
            onKeyDown={updateTextInput}
        />
        <InputGroup.Append>
        </InputGroup.Append>
      </InputGroup>
    );
}

function mapStateToProps(state) {
    return { main: state.main };
}

export default connect(mapStateToProps, actions)(SearchField);