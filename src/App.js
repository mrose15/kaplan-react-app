import React from "react";
import BookList from "./components/BookList/BookList";
import Modal from "./components/Modal/Modal";
import Input from "./components/Input/Input";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
  }

  modalProps = {
    triggerText: "Create New Book",
  };

  modalContent = (
    <React.Fragment>
      <h2>Add a New Book</h2>
      <label htmlFor="booktitle" className="sr-only">
        Book Title
      </label>
      <Input placeholder="Book Title" type="text" id="booktitle" />

      <label htmlFor="bookauthor" className="sr-only">
        Book Author
      </label>
      <Input placeholder="Book Author" type="text" id="bookauthor" />

      <label htmlFor="bookpublisher" className="sr-only">
        Book Publisher
      </label>
      <Input placeholder="Book Publisher" type="text" id="bookpublisher" />

      <label htmlFor="bookpublishdate" className="sr-only">
        Book Publish Date
      </label>
      <Input placeholder="Book Publish Date" type="text" id="bookpublishdate" />
    </React.Fragment>
  );

  render() {
    return (
      <main className="container">
        <div className="container__row">
          <div className="container__col-xs-4 container__col-md-8">
            <h1>Books</h1>
          </div>
          <div className="container__col-xs-6 container__col-md-3 flex-align-center align-right">
            <Modal
              modalProps={this.modalProps}
              modalContent={this.modalContent}
            />
          </div>
          <BookList />
        </div>
      </main>
    );
  }
}

export default App;
