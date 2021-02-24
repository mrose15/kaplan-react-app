import React from "react";

const InputBox = ({ type, placeholder, className, handleChange, id }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={handleChange}
      id={id}
    />
  );
};

export default InputBox;
