import React from "react";
import BookList from "./components/BookList/BookList";
import Button from "./components/Button/Button";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="container__row">
          <div className="container__col-xs-6 container__col-md-8">
            <h1>Books</h1>
          </div>
          <div className="container__col-xs-6 container__col-md-3 flex-align-center">
            <Button variant="primary" size={"lg"}>
              Create New Book
            </Button>
          </div>

          <BookList />
        </div>
      </main>
    );
  }
}

export default App;
