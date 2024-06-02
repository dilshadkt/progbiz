import React from "react";

const Button = ({
  value,
  variant,
  width,
  type,
}: {
  value: string /* VALUE THAT SHOW ON THE BUTTON */;
  variant: string /* BUTTON STYPE PROPERTY , [CLASS NAME OF STYLE] */;
  width?: number;
  type: string /* BUTTON TYPE ENUM [RESET,SUBMIT,BUTTON] */;
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
