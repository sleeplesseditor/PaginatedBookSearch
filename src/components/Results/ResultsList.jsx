import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ResultsList = ({ books }) => {
        if (!books)
            return ( <div>Loading...</div> );
        return (
            <ListGroup className="text-primary">
                {books ? books.map((book) => <ListGroup.Item key={book.id}>
                    <h5>{book.book_title}</h5>
                    <ul className="book-list">
                        <li>Author: {book.book_author}</li>
                        <li>Publishing Location: {book.book_publication_country}, {book.book_publication_city}</li>
                        <li>Year of Publication: {book.book_publication_year}</li>
                        <li>Number of Pages: {book.book_pages.toLocaleString()}</li>
                    </ul>
                </ListGroup.Item>) : <p>None found...</p>}
            </ListGroup>
        );
};

export default ResultsList;