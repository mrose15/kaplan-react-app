import React from 'react';
import BookList from './Components/BookList';
import Search from './Components/Search';
import NewBookBtn from './Components/NewBookBtn';
import './App.scss';

function App() {
  return (
    <main className="container">
      <div className="container__row"> 
        <div className="container__col-xs-8">
          <h1>Books</h1>
        </div>
        <NewBookBtn />
        <Search />
        <BookList />
      </div>
    </main>
  );
}

export default App;
