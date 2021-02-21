import React from 'react'
import axios from 'axios'
import Book from './Book'

export default class BookList extends React.Component{
    state = {
        books: []
    }

    componentDidMount(){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`)
        .then(res => {
            this.setState({ books: res.data.items })
        });
    }

    render(){
        return (
            <section className="container__row booklist">
                <div className="container__col-xs-12">
                    <h2>All Books</h2>
                </div>
                {this.state.books.map(book => {
                   return <Book key={book.id} book={book}/>
                })}
            </section>    
        )
    }
}
