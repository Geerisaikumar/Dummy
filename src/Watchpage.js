import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MenuOpen } from "./utils/appSlice";
import { WATCH_VIDEOS_URL } from "./utils/Constant";
import CommentsBox from "./components/CommentsBox";
import Livechat from "./components/Livechat";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [watchPageData, setWatchPageData] = useState([""]);

  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(MenuOpen());
    GetWatchVideosData();
  }, []);

  const GetWatchVideosData = async () => {
    const data = await fetch(WATCH_VIDEOS_URL);
    const json = await data.json();
    setWatchPageData(json.items);
  };

  return (
    <div className="mt-8 ml-9 w-full">
      <div className="flex ">
        <div className="">
          <iframe
            className=""
            width="850"
            height="475"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-5 border rounded-lg border-black w-full bg-gray-100">
          <Livechat />
        </div>
      </div>
      <div className="w-[850px]">
        <CommentsBox />
      </div>
    </div>
  );
};

export default Watchpage;
