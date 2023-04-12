import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { YOUTUBE_VIDEOS_API_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const toggleMenu = useSelector((store) => store.app);

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    GetVideos();
  }, []);

  const GetVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center h-[calx(100vh-6.6rem)] mt-4">
      {videos.map((video) => (
        <Link className="" to={"/watch?v=" + video.id} key={video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
