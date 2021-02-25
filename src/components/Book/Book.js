import React from "react";

const Book = ({ book }) => {
  return (
    <div className="container__col-xs-12 container__col-md-5 bookcard">
      {book.volumeInfo.title && <h4>{book.volumeInfo.title}</h4>}

      {book.volumeInfo.authors[0] && (
        <p>Authors: {book.volumeInfo.authors[0]}</p>
      )}
      {book.volumeInfo.publisher && (
        <p>Publisher: {book.volumeInfo.publisher}</p>
      )}
      {book.volumeInfo.publishedDate && (
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
      )}
    </div>
  );
};

export default Book;
