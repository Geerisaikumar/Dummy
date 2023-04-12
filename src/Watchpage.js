import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MenuOpen } from "./utils/appSlice";
import { WATCH_VIDEOS_URL } from "./utils/Constant";
import Comments from "./components/Comments";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(MenuOpen());
    GetWatchVideosData();
  }, []);

  const GetWatchVideosData = async () => {
    const data = await fetch(WATCH_VIDEOS_URL);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <iframe
        className="mx-10 "
        width="770"
        height="415"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Comments />
    </div>
  );
};

export default Watchpage;
