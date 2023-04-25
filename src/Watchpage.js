import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MenuOpen } from "./utils/appSlice";
import { WATCH_VIDEOS_URL, YOUTUBE_CHANNELS_API_URL } from "./utils/Constant";
import CommentsBox from "./components/CommentsBox";
import Livechat from "./components/Livechat";
import Watchpagedetails from "./Watchpagedetails";
import CommentsThread from "./components/CommentsThread";
import YoutubeChannels from "./components/YoutubeChannels";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [watchPageData, setWatchPageData] = useState([""]);

  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(MenuOpen());
  }, []);

  useEffect(() => {
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

          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PHrt9rRLV88"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          {watchPageData.map((data) => (
            <Watchpagedetails details={data} key={data.id} />
          ))}
        </div>
        <div className="mx-5 border rounded-lg border-gray-300 w-full bg-gray-100">
          <Livechat />
        </div>
      </div>
      <div className="w-[850px]">
        <YoutubeChannels />
        <CommentsThread />
        <CommentsBox />
      </div>
    </div>
  );
};

export default Watchpage;
