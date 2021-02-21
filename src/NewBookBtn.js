import React from 'react'

export default function NewBookBtn() {
    return (
        <div>
            <button type="button" tabIndex="0">
                Create New Book
            </button>
             {/*  TODO: figure out how to inject into new component and reference it here */} 
            <div className="modal hidden">
                <button className="close-modal">&times;</button>
                <h2>Create New Book</h2>
                <form>
                    <label htmlFor="booktitle">Title:</label>
                    <input type="text" name="booktitle" id="booktitle"/>

                    <label htmlFor="bookauthor">Author:</label>
                    <input type="text" name="bookauthor" id="bookauthor"/>

                    <label htmlFor="bookpublisher">Publisher:</label>
                    <input type="text" name="bookpublisher" id="bookpublisher"/>

                    <label htmlFor="bookpublisheddate">Published Date:</label>
                    <input type="text" name="bookpublisheddate" id="bookpublisheddate"/>
                </form>
            </div>
        </div>

    )
}
