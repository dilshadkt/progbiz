import Image from "next/image";
import React from "react";

const IconButton = ({
  image,
  title,
  isRotate = false,
  setRotate,
}: {
  image: string;
  title: string;
  isRotate?: boolean;
  setRotate?: React.Dispatch<boolean>;
}) => {
  const ChangeOccure = () => {
    setRotate && setRotate(!isRotate);
  };
  return (
    <button
      onClick={() => ChangeOccure()}
      title={title}
      className="w-9 h-9 rounded-lg bg-gray-100 flexCenter"
    >
      <Image
        src={image}
        alt="btn_icon"
        width={16}
        height={16}
        className={`transition-all duration-300 ${isRotate && `-rotate-90`}`}
      />
    </button>
  );
};

export default IconButton;
