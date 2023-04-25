import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(48)
        .fill("")
        .map((e, indx) => (
          <div
            className="mx-2 my-3 w-[21.5rem] h-[21rem] aspect-video"
            key={indx}
          >
            <div className="h-[12rem] bg-slate-300 rounded-lg"></div>
            <div className="mx-3 py-4">
              <ul className="">
                <li className="w-72 h-6 bg-slate-300 rounded-lg"></li>
                <li className="w-44 h-6 my-3 bg-slate-300 rounded-lg"></li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
