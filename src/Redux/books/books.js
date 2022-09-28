import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore / books / ADD_BOOK';
const REMOVE_BOOK = 'bookstore / books / REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const addBook = createAsyncThunk(ADD_BOOK, async (book, { dispatch }) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(book),
  });
  dispatch({
    type: ADD_BOOK,
    book,
  });
});
const fetchBooks = createAsyncThunk(FETCH_BOOKS, async (args, { dispatch }) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/', {
    method: 'GET',
  });
  const data = await response.json();
  const bookIDs = Object.entries(data);
  const books = [];
  bookIDs.forEach(([key, book]) => {
    const id = key;
    const { title, author, category } = book[0];
    books.push({
      id, title, author, category,
    });
  });
  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });
  return books;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, { dispatch }) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WLWRGsXNCux9kjlYUIID/books/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
});
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.book];
    }
    case FETCH_BOOKS: {
      return [...action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
export default booksReducer;
export { addBook, removeBook, fetchBooks };
