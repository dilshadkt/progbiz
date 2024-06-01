"use client";
import IconButton from "./components/shared/IconButton";
import ImagePicker from "./components/shared/ImagePicker";
import InputBox from "./components/shared/InputBox";
import { useForm } from "react-hook-form";
import SelectBox from "./components/shared/SelectBox";
import { formNavigation, fromField } from "@/constants";
import { nanoid } from "nanoid";
import Button from "./components/shared/Button";
import Image from "next/image";

export default function Home() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const postFormData = (data: any) => {
    console.log(data);
  };

  return (
    <section className="w-full  flex flex-col h-full">
      <nav className="flexBetween w-full">
        <div className="flexStart">
          <IconButton title="menu" image="/hamburg.svg" />
          <h5 className="bold-20 text-gray-800 ml-5">New Invoice</h5>
        </div>
        <div className="flexStart gap-[6px]">
          <IconButton title="search" image="/search.svg" />
          <IconButton title="add new form" image="/add.svg" />
        </div>
      </nav>
      <div className="mt-6 bg-white  gap-7  py-6 px-[26px] overflow-hidden rounded-lg h-full flex">
        <div className="flex-1   overflow-scroll">
          <ImagePicker />

          <form
            onSubmit={handleSubmit(postFormData)}
            className="text-gray-400 pb-6 h-full"
          >
            <div className="grid grid-cols-2 gap-x-5">
              {fromField
                .slice(0, 4)
                .map((item) =>
                  item.type === "text" ? (
                    <InputBox
                      errors={errors}
                      register={register}
                      image={item.icon}
                      type="text"
                      placeholder={item.plcaeholder}
                      name={item.name}
                    />
                  ) : item.type === "date" ? (
                    <InputBox
                      errors={errors}
                      register={register}
                      image={item.icon}
                      type="date"
                      placeholder={item.plcaeholder}
                      name={item.name}
                    />
                  ) : (
                    <SelectBox
                      key={nanoid()}
                      register={register}
                      errors={errors}
                      name={item.name}
                      placeholder={item.plcaeholder}
                      value={item?.value}
                    />
                  )
                )}
            </div>
            <InputBox
              errors={errors}
              register={register}
              image={fromField[4].icon}
              type="text"
              placeholder={fromField[4].plcaeholder}
              name={fromField[4].name}
            />
            <div className="grid grid-cols-2 gap-x-5 mb-12">
              {fromField
                .slice(5)
                .map((item) =>
                  item.type === "text" ? (
                    <InputBox
                      key={nanoid()}
                      errors={errors}
                      register={register}
                      image={item.icon}
                      type="text"
                      placeholder={item.plcaeholder}
                      name={item.name}
                    />
                  ) : item.type === "date" ? (
                    <InputBox
                      key={nanoid()}
                      errors={errors}
                      register={register}
                      image={item.icon}
                      type="date"
                      placeholder={item.plcaeholder}
                      name={item.name}
                    />
                  ) : (
                    <SelectBox
                      key={nanoid()}
                      register={register}
                      errors={errors}
                      name={item.name}
                      placeholder={item.plcaeholder}
                      value={item?.value}
                    />
                  )
                )}
            </div>
            <div className="flexStart gap-x-[6px]">
              <Button
                type="submit"
                width={172}
                value="Save & Send"
                variant="btn-blue"
              />
              <Button
                type="reset"
                width={172}
                value="Cancel"
                variant="btn-gray"
              />
            </div>
          </form>
        </div>

        <div className="flex-intial  w-[30%]  flex flex-col justify-between  ">
          <div className="border border-gray-100 rounded-lg h-fit  ">
            {formNavigation.slice(0, 3).map((item, index) => (
              <div
                key={nanoid()}
                className={`py-6 cursor-pointer px-8 flexStart border-gray-100  ${
                  index < 2 && `border-b`
                } `}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={22}
                  height={22}
                />
                <div className="flex flex-col ml-5">
                  <h5 className="bold-14 text-gray-800">{item.title}</h5>
                  <p className="regular-12 text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-gray-100 rounded-lg h-fit  ">
            {" "}
            {formNavigation.slice(3).map((item, index) => (
              <div
                key={nanoid()}
                className={`py-6 cursor-pointer px-8 flexStart border-gray-100  ${
                  index < 4 && `border-b`
                } `}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={22}
                  height={22}
                />
                <div className="flex flex-col ml-5">
                  <h5 className="bold-14 text-gray-800">{item.title}</h5>
                  <p className="regular-12 text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
