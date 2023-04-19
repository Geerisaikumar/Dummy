import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      <div className="mx-2 my-3 w-[21.5rem] h-[21rem] aspect-video">
        <div className="h-[12rem] bg-slate-200 rounded-lg"></div>
        <div className="mx-3 py-4">
          <ul className="">
            <li className="w-72 h-6 bg-slate-200"></li>
            <li className="w-44 h-6 my-3 bg-slate-200"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
