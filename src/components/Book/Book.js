import React from "react";

export default function Book({ book }) {
  return (
    <div className="container__col-xs-12 container__col-md-5 bookcard">
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors[0]}</p>
      <p>{book.volumeInfo.publisher}</p>
      <p>{book.volumeInfo.publishedDate}</p>
    </div>
  );
}
