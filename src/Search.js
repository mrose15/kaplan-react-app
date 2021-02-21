import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
    return (
        <div className="container__col-xs-6">
            <FontAwesomeIcon icon={faSearch} />
            <label htmlFor="booksearch">Search</label>
            <input type="text" placeholder="Search" id="booksearch"></input>
        </div>
    )
}
