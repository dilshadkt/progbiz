"use client";
import { sidebar } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useState } from "react";
import ToolBar from "./ToolBar";
import IconButton from "./shared/IconButton";

const Sidebar = () => {
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  return (
    <>
      <ToolBar />
      <section
        className={`hidden lg:block relative transition-all duration-300  ${
          showInvoice ? `w-[20px]` : "w-[367px] "
        } bg-white text-gray-800 `}
      >
        <Image
          src={"/down.svg"}
          onClick={() => setShowInvoice(!showInvoice)}
          alt="arrow"
          width={14}
          height={14}
          className={`absolute  cursor-pointer block ${
            !showInvoice && "hidden"
          } top-0 bottom-0 right-[2px]    my-auto -rotate-90`}
        />
        <div
          className={`flexCenter border-b border-gray-100 w-full px-4 xl:px-7 ${
            showInvoice && `xl:px-2 border-b-0`
          } py-5`}
        >
          <div
            className={`flexBetween w-full ${
              showInvoice ? `w-0` : `w-full `
            } overflow-hidden transition-all duration-300`}
          >
            <div className={`  flexStart `}>
              <Image src={"/logo.svg"} alt="logo" width={36} height={36} />
              <div className="flex flex-col ml-3">
                <h5 className="bold-14">Progbiz Private Limited</h5>
                <span className="regular-12 text-gray-400">
                  8484 Ross Wells
                </span>
              </div>
            </div>
            <IconButton
              isRotate={showInvoice}
              setRotate={setShowInvoice}
              title="show invoice details"
              image="/down.svg"
            />
          </div>
        </div>
        <div
          className={` p-4 xl:p-7 ${
            !showInvoice ? `scale-100` : `scale-0`
          } transition-all duration-300`}
        >
          <h5 className="bold-16">Invoices breakdown</h5>
          <span className="regular-14 text-gray-400">
            Learn more about invoices created
          </span>
          <div className="mt-5">
            {sidebar.map((item) => (
              <div
                key={nanoid()}
                className="mb-[6px] bg-gray-20 hover:bg-gray-50 px-6 rounded-lg  py-[14px]"
              >
                <div className="flexBetween w-full">
                  <div>
                    <h4 className="bold-18">{item.title}</h4>
                    <p className="text-gray-400 regular-14">
                      {item.description}
                    </p>
                  </div>
                  <div className="flexStart">
                    <h5 className="bold-20">{item.value}</h5>
                    <div className="w-4 h-4 ml-1 flexCenter">
                      {item.growth && (
                        <Image
                          src={"growth.svg"}
                          alt="growth"
                          width={12}
                          height={12}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full flex h-1 rounded-lg mt-4 bg-gray-100 overflow-hidden">
                  <div
                    style={{
                      width: ` ${item.progress.value}%`,
                      background: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
