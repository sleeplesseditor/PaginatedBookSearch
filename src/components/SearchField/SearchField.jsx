import React from "react";
import { Button } from 'react-bootstrap';
import { FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SearchField = ({ searchFilters }) => {
  
    const updateTextInput = (event) => {
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
          {/* <Button onClick={searchFilters(event.target.value)}>
            Submit
          </Button> */}
        </InputGroup.Append>
      </InputGroup>
    );
}

function mapStateToProps(state) {
    return { main: state.main };
}

export default connect(mapStateToProps, actions)(SearchField);