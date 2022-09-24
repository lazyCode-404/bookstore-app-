const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    author: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    category: 'Fiction',
  },
  {
    id: 2,
    author: 'F. Scott Fitzgerald',
    title: '  The Great Gatsby',
    category: 'Fiction',
  },
  {
    id: 3,
    author: 'J. D. Salinger',
    title: 'The Catcher in the Rye',
    category: 'Fiction',
  },
];

// Actions

export const addBook = (book) => ({ type: ADD_BOOK, book });
export const deleteBook = (id) => (
  {
    type: REMOVE_BOOK, id,
  });

// Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const bookObj = {
        id: state.length + 1,
        author: action.book.author,
        title: action.book.title,
      };
      return [...state, bookObj];
    }

    // case GET_BOOKS:
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
