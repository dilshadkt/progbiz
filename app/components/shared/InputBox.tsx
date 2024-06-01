import Image from "next/image";
import React from "react";

const InputBox = ({
  image,
  register,
  name,
  errors,
  placeholder,
  type,
}: {
  image: string;
  register: any;
  name: string;
  errors: any;
  placeholder: string;
  type?: string;
}) => {
  return (
    <div>
      <div className="py-2 border-b-[1px] border-gray-100 my-1">
        <label className="regular-14 ">{name} </label>
        <div className=" relative">
          <input
            type={type}
            {...register(`${name}`, { required: `${name} is required` })}
            className={`w-full outline-none py-2 ${
              type === "text" ? `pr-6` : `pr-0`
            } bold-14 g-rrde  mt-1 `}
            placeholder={placeholder}
          />
          {type !== "date" && (
            <Image
              src={image}
              alt="company"
              width={18}
              height={18}
              className="absolute right-0 top-0 bottom-0 my-auto"
            />
          )}
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-400 regular-12">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputBox;
