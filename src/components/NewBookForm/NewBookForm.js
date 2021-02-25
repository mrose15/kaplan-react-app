import React from "react";
import Button from "../Button/Button";
import InputBox from "../Input/Input";

const NewBookForm = ({ inputText, setInputText, newBooks, setNewBooks }) => {
  const newBookTitle = (e) => {
    setInputText(e.target.value);
  };

  const submitNewBookHandler = (e) => {
    e.preventDefault();
    setNewBooks([...newBooks, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <form>
      <h2>Add a New Book</h2>
      <label htmlFor="booktitle" className="sr-only">
        Book Title
      </label>
      <InputBox
        placeholder="Book Title"
        type="text"
        id="booktitle"
        handleChange={newBookTitle}
        value={inputText}
      />

      <label htmlFor="bookauthor" className="sr-only">
        Book Author
      </label>
      <InputBox placeholder="Book Author" type="text" id="bookauthor" />

      <label htmlFor="bookpublisher" className="sr-only">
        Book Publisher
      </label>
      <InputBox placeholder="Book Publisher" type="text" id="bookpublisher" />

      <label htmlFor="bookpublishdate" className="sr-only">
        Book Publish Date
      </label>
      <InputBox
        placeholder="Book Publish Date"
        type="text"
        id="bookpublishdate"
      />
      <Button
        variant="primary"
        size="lg"
        position="right"
        aria-label="Submit Book"
        aria-labelledby="submit-book"
        handleChange={submitNewBookHandler}
      >
        <span id="submit-book">Submit</span>
      </Button>
    </form>
  );
};

export default NewBookForm;
