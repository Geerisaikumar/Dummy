import React from "react";
import { numify } from "numify";

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const titleLimit = title.substring(0, 70);

  const setTitle = titleLimit.length >= 70 ? titleLimit + "..." : titleLimit;

  return (
    <div className="mx-2 w-[24.4rem] h-[22rem] aspect-video">
      <div className="h-[13.5rem]  ">
        <img
          className="min-w-full rounded-lg hover:rounded-none"
          alt="video"
          src={thumbnails.medium.url}
        />
      </div>

      <div className="mx-3 py-4">
        <ul className="">
          <li className="font-medium text-[17px] line-clamp-2">{setTitle}</li>
          <li className="text-sm font-medium py-1 text-gray-500">
            {channelTitle}
          </li>
          <li className="text-[15px] font-normal text-gray-500">
            {numify(statistics.viewCount)} views{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Videocard;
