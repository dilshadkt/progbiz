"use client";
import { toolbar } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ToolBar = () => {
  const [clickedItem, setClickedItem] = useState<null | string>(null);
  return (
    <section className="w-[83px] border-r border-gray-100 bg-white flex flex-col justify-between py-7">
      <div className="flexCenter  pb-2 ">
        <Image src={"toolbar_logo.svg"} alt="logo" width={30} height={30} />
      </div>

      <div className="h-full overflow-y-scroll">
        {toolbar.map((item) => (
          <Link key={nanoid()} href={`/#${item.path}`}>
            <div
              title={item.title}
              onClick={() => setClickedItem(item.title)}
              className={`h-[64px] relative cursor-pointer text-red-300    my-1 flexCenter`}
            >
              <div
                className={`w-[2px]  absolute right-0 rounded-full h-12  transition-all duration-700 bg-blue-400 ${
                  clickedItem === item.title ? `block` : `hidden`
                }`}
              ></div>

              <div
                className={`p-3 hover:bg-blue-50 flexCenter ${
                  clickedItem === item.title && `bg-blue-50`
                } rounded-lg min-h-12 min-w-12`}
              >
                <div className="flexCenter relative">
                  {(item.title === "chat" || item.title === "vision") && (
                    <div className="w-3 h-3 z-40 rounded-full bg-white flexCenter absolute -top-[4px] -right-[4px]">
                      <div
                        className={`w-[7px] h-[7px] ${
                          item.title.includes("vision")
                            ? `bg-red-400`
                            : `bg-green-400`
                        }  rounded-full`}
                      ></div>
                    </div>
                  )}
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={22}
                    height={22}
                    className={` ${clickedItem === item.title && `svg-icon`} `}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flexCenter ">
        <div className="w-8 h-8 relative fleCenter   mt-2">
          <Image
            src={"/img.png"}
            alt="profile"
            width={32}
            height={32}
            className="overflow-hidden rounded-lg"
          />
          <div
            title="online"
            className="w-3 h-3 rounded-full bg-white flexCenter absolute -bottom-[3px] -right-[3px]"
          >
            <div className="w-[7px] h-[7px] bg-green-500  rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBar;
