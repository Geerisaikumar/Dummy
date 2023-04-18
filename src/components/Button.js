import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <div className="">
        <button className="bg-gray-100 py-[6px] font-PoppinsFont px-3 mx-[6px] rounded-md text-[15px] hover:bg-gray-200  focus:bg-black focus:text-white">
          {name}
        </button>
      </div>
    </div>
  );
};

export default Button;
