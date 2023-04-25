import React from "react";

const Chatmessages = ({ name, messages }) => {
  return (
    <div className="flex items-center p-[5px] bg-slate-100-100 my-1 shadow-sm">
      <img
        alt="ProfileImg"
        className="h-6 px-3"
        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
      />
      <div className="text-[14px] w-full">
        <span className="text-gray-400 font-RobotoFont font-medium px-2 ">
          {name}
        </span>
        <span className="">{messages}</span>
      </div>
    </div>
  );
};

export default Chatmessages;
