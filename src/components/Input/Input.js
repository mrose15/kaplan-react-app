import React from "react";

const InputBox = ({
  type,
  placeholder,
  className,
  handleChange,
  id,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={handleChange}
      id={id}
      value={value}
    />
  );
};

export default InputBox;
