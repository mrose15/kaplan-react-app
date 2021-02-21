import React from 'react';
import BookList from './BookList';
import Search from './Search';
import NewBookBtn from './NewBookBtn';
import './App.scss';


function App() {
  return (
    // Elements need to be nested, returns can only return one element. Wrapped inside of empty element called a fragment
    <main className="container">
      <div className="container__row"> 
        <div className="container__col-xs-12">
          <h1>Books</h1>
        </div>
        <Search />
        <BookList />
        <NewBookBtn />
      </div>
    </main>
  );
}

export default App;
