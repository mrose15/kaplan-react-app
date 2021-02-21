import React from 'react'

export default function Book({ book }) {
    return (
        <div className="container__col-xs-12 container__col-md-6">
            <div className="bookcard">
                {book}
            </div>
        </div>
    )
}
