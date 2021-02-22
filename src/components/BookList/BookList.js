import React from "react";
import axios from "axios";
import Book from "../Book/Book";
import InputBox from "../Input/Input";

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

    const filteredBooks = books.filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(searchField.toLowerCase())
    );

    // const searchedList = [];
    // books.map((book) => {
    //   const title = book.volumeInfo.title;
    //   const author = book.volumeInfo.authors[0];
    //   const publisher = book.volumeInfo.publisher;
    //   if (
    //     title.toLowerCase().includes(searchField.toLowerCase()) ||
    //     author.toLowerCase().includes(searchField.toLowerCase()) ||
    //     publisher.toLowerCase().includes(searchField.toLowerCase())
    //   ) {
    //     console.log(`title`);
    //     searchedList.push(book);
    //   }
    // });

    console.log(searchField);
    console.log(books);
    console.log(filteredBooks);
    // console.log(searchedList);
    // console.log(searchedList.length);

    return (
      <section className="container__row booklist">
        <InputBox
          placeholder="Search"
          type="search"
          handleChange={this.editSearchTerm}
        />
        <div className="container__col-xs-12">
          <h2>All Books</h2>
        </div>
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    );
  }
}
