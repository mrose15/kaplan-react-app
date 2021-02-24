import React, { useState } from "react";

const Button = React.forwardRef((props, ref) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [position] = useState(props.position);

  return (
    <button
      ref={ref}
      className={`btn btn--${variant} btn--${size} btn--${position}`}
      onClick={props.handleChange}
    >
      {props.children}
    </button>
  );
});

export default Button;
