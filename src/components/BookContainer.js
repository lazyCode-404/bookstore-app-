import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'To Kill A Mockingbird',
      author: 'Harper Lee',
      id: 1,
      category: 'Classic Fiction',
    },
    {
      title: 'The Sun Also Rises',
      author: 'Ernest Hemingway',
      id: 2,
      category: 'Classic Fiction',
    },
  ];

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
