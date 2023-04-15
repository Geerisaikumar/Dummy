import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MenuOpen } from "./utils/appSlice";
import { WATCH_VIDEOS_URL } from "./utils/Constant";
import CommentsBox from "./components/CommentsBox";

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
    <div className="mt-8">
      <iframe
        className="mx-10 "
        width="950"
        height="515"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <CommentsBox />
      </div>
    </div>
  );
};

export default Watchpage;
