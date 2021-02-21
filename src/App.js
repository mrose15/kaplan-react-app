import React, { useState } from 'react';
import BookList from './BookList';
import Search from './Search';
import NewBookBtn from './NewBookBtn';
import './App.scss';

function App() {
  const [books, setBooks] = useState(['Book 1', 'Book 2'])
  return (
    <main className="container">
      <div className="container__row"> 
        <div className="container__col-xs-8">
          <h1>Books</h1>
        </div>
        <NewBookBtn />
        <Search />
        <BookList books={books}/>
      </div>
    </main>
  );
}

export default App;
