import React from "react";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputBox = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.handleChange}
    />
  );
};

export default InputBox;

// export default function Search({ books }) {

//   return (
//     <div className="container__col-xs-6">
//       <FontAwesomeIcon icon={faSearch} />
//       {/* This is label is best for Accessibility but it's not present in the design. According to the design, this field has a placeholder instead
//       <label htmlFor="booksearch">Search</label>*/}
//       <input type="text" placeholder="Search" id="booksearch"></input>
//     </div>
//   );
// }
