import React from "react";

export default function Book({ book }) {
  return (
    <div className="container__col-xs-12 container__col-md-5 bookcard">
      <h4>{book.volumeInfo.title}</h4>
      <p>Authors: {book.volumeInfo.authors[0]}</p>
      <p>Publisher: {book.volumeInfo.publisher}</p>
      <p>Published Date: {book.volumeInfo.publishedDate}</p>
    </div>
  );
}
