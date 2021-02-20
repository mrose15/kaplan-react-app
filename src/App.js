import React from 'react';
import BookList from './BookList';
import Search from './Search';
import NewBookBtn from './NewBookBtn';

function App() {
  return (
    // Elements need to be nested, returns can only return one element. Wrapped inside of empty element called a fragment
    <> 
    <h1>Books</h1>
      <Search />
      <BookList />
      <NewBookBtn />
    </>
  );
}

export default App;
