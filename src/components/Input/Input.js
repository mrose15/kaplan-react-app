import React from "react";

const InputBox = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.handleChange}
      id={props.id}
    />
  );
};

export default InputBox;
