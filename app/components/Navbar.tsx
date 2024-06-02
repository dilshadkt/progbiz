import React, { useState } from "react";
import IconButton from "./shared/IconButton";

const Navbar = () => {
  const [isSerach, setIsSearch] = useState<boolean>(false);
  return (
    <nav className="flexBetween w-full h-11">
      <div className="flexStart">
        <IconButton title="menu" image="/hamburg.svg" />
        <h5 className="bold-20 text-gray-800 ml-5">New Invoice</h5>
      </div>
      <div className="flexStart gap-[6px] bg-red-40">
        {isSerach && (
          <input
            type="text"
            className="p-[7px] px-3 outline-none rounded-lg"
            placeholder="Search here .."
          />
        )}
        <div onClick={() => setIsSearch(!isSerach)}>
          <IconButton title="search" image="/search.svg" />
        </div>
        <IconButton title="add new form" image="/add.svg" />
      </div>
    </nav>
  );
};

export default Navbar;
