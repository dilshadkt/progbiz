"use client";
import { formNavigation, fromField } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import Button from "./components/shared/Button";
import ImagePicker from "./components/shared/ImagePicker";
import InputBox from "./components/shared/InputBox";
import SelectBox from "./components/shared/SelectBox";

export default function Home() {
  const [selectedForm, setSelectedForm] = useState<null | string>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const postFormData = (data: any) => {
    console.log(data);
  };

  return (
    <section className="w-full max-w-screen-2xl mx-auto  flex flex-col h-full">
      <Navbar />
      <div className="mt-6 bg-white    gap-7  py-6 px-[26px] overflow-scroll flex flex-col-reverse  rounded-lg h-full lg:flex-row">
        {/* FORM SECIION  */}
        <div className="flex-1  lg:overflow-scroll">
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
        {/* FORM NAVIGATION SECTION  */}
        <div className="flex-intial w-full lg:w-[30%]  flex lg:flex-col justify-between  ">
          <div className="border border-gray-100 rounded-lg h-fit  ">
            {formNavigation.slice(0, 3).map((item, index) => (
              <Link key={nanoid()} href={`?filterBy=${item.title}`}>
                <div
                  onClick={() => setSelectedForm(item.title)}
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
                    className={`${
                      selectedForm?.includes(item.title) && `svg-icon `
                    }`}
                  />
                  <div className={`flex flex-col ml-5 `}>
                    <h5
                      className={`bold-14 hover:text-blue-400  ${
                        selectedForm?.includes(item.title)
                          ? `text-blue-400`
                          : `text-gray-800`
                      }`}
                    >
                      {item.title}
                    </h5>
                    <p className="regular-12 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="border border-gray-100 rounded-lg h-fit  ">
            {formNavigation.slice(3).map((item, index) => (
              <Link key={nanoid()} href={`?filterBy=${item.title}`}>
                <div
                  onClick={() => setSelectedForm(item.title)}
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
                    className={`${
                      selectedForm?.includes(item.title) && `svg-icon `
                    }`}
                  />
                  <div className="flex flex-col ml-5">
                    <h5
                      className={`bold-14 hover:text-blue-400  text-gray-800  ${
                        selectedForm?.includes(item.title)
                          ? `text-blue-400`
                          : `text-gray-800`
                      }`}
                    >
                      {item.title}
                    </h5>
                    <p className="regular-12 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
