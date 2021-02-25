import React, { useState } from "react";
import BookList from "./components/BookList/BookList";
import Modal from "./components/Modal/Modal";
import NewBookForm from "./components/NewBookForm/NewBookForm";
//import Button from "./components/Button/Button";
//import InputBox from "./components/Input/Input";
import "./App.scss";

function App() {
  const modalProps = {
    triggerText: "Create New Book",
  };

  const [inputText, setInputText] = useState("");
  const [newBooks, setNewBooks] = useState([]);

  const modalContent = (
    <NewBookForm
      inputText={inputText}
      newBooks={newBooks}
      setNewBooks={setNewBooks}
      setInputText={setInputText}
    />
  );
  return (
    <main className="container">
      <div className="container__row">
        <div className="container__col-xs-4 container__col-md-8">
          <h1>Books</h1>
        </div>
        <div className="container__col-xs-6 container__col-md-3 flex-align-center align-right">
          <Modal modalProps={modalProps} modalContent={modalContent} />
        </div>
        <BookList newBooks={newBooks} />
      </div>
    </main>
  );
}

export default App;
