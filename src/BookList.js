import React from 'react'
import Book from './Book'

export default function BookList({ books }) {
    return (
        <section className="container__row booklist">
            <div className="container__col-xs-12">
                <h2>All Books</h2>
            </div>
            { books.map(book => {
                return <Book key={book} book={book} />
            }) }
        </section>
    )
}
