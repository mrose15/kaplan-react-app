import React from "react";
import BookList from "./components/BookList/BookList";
import Modal from "./components/Modal/Modal";
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
      <p>
        Press <code>Esc</code> or click Outside the Modal to exit.
      </p>
      <p>
        Pressing Return also exits the Modal if you haven't changed the focus!
      </p>
    </React.Fragment>
  );

  render() {
    return (
      <main className="container">
        <div className="container__row">
          <div className="container__col-xs-6 container__col-md-8">
            <h1>Books</h1>
          </div>
          <div className="container__col-xs-6 container__col-md-3 flex-align-center">
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
