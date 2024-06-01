import React from "react";

const Button = ({
  value,
  variant,
  width,
  type,
}: {
  value: string;
  variant: string;
  width?: number;
  type: string;
}) => {
  return (
    <button
      type={type as "reset" | "submit" | "button"}
      style={{ width: width }}
      className={`flexCenter px-4 py-3  ${variant} rounded-lg`}
    >
      {value}
    </button>
  );
};

export default Button;
