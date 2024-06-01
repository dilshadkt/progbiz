import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";

const SelectBox = ({
  register,
  name,
  errors,
  placeholder,
  value,
}: {
  register: any;
  name: string;
  errors: any;
  placeholder: string;
  value?: string[];
}) => {
  return (
    <div>
      <div className="py-2 border-b-[1px] border-gray-100 my-1">
        <label className="regular-14">{name}</label>
        <div className="relative">
          <select
            {...register(`${name}`, { required: `${name} is required` })}
            className="w-full outline-none appearance-none py-2 pr-6 bold-14 mt-1 cursor-pointer"
            defaultValue=""
          >
            <option disabled value="">
              {placeholder}
            </option>
            {value?.map((item) => (
              <option key={nanoid()} value={item}>
                {item}
              </option>
            ))}
          </select>
          <Image
            src={"/down.svg"}
            alt="company"
            width={18}
            height={18}
            className="absolute right-0 top-0 bottom-0 my-auto"
          />
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-400 regular-12">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectBox;
