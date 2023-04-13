import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <div className="">
        <button className="bg-gray-100 py-[5px] px-3 m-2 rounded-md text-[17px] hover:bg-gray-200  focus:bg-black focus:text-white ">
          {name}
        </button>
      </div>
    </div>
  );
};

export default Button;
