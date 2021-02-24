import React from "react";
import axios from "axios";
import Book from "../Book/Book";
import InputBox from "../Input/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BookList extends React.Component {
  state = {
    books: [],
    searchField: "",
  };

  componentDidMount() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`)
      .then((res) => {
        this.setState({ books: res.data.items });
      })
      .catch((error) => {
        throw error;
      });
  }

  editSearchTerm = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //object extraction
    const { books, searchField } = this.state;

    const searchedList = [];
    books.forEach((book) => {
      const searchString = `${book.volumeInfo.title} ${book.volumeInfo.authors[0]} ${book.volumeInfo.publisher}`;
      if (searchString.toLowerCase().includes(searchField.toLowerCase())) {
        return searchedList.push(book);
      }
    });

    return (
      <section className="container__row booklist">
        <div className="container__col-xs-12 container__col-md-6">
          <div className="booklist__search">
            <div className="booklist__search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <label htmlFor="booksearch" className="sr-only">
              Search
            </label>
            <InputBox
              placeholder="Search"
              type="search"
              handleChange={this.editSearchTerm}
              id="booksearch"
            />
          </div>
        </div>
        <div className="container__col-xs-12">
          <h2>All Books</h2>
        </div>
        {searchedList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    );
  }
}
