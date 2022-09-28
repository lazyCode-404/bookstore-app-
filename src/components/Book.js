import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
/* eslint-disable react/prop-types */
function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  return (
    <li>
      <div className="book">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <a href="./" id={id} className="remove-btn" onClick={deleteBook}>Remove</a>
      </div>
    </li>
  );
}
export default Book;
