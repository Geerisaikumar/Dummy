import { useState, useEffect } from "react";
import { YOUTUBE_CHANNELS_API_URL } from "../utils/Constant";

const YoutubeChannels = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    GetYoutubeChannels();
  }, []);

  const GetYoutubeChannels = async () => {
    const data = await fetch(YOUTUBE_CHANNELS_API_URL);
    const json = await data.json();
    setVideos(json);
    console.log(json);
  };
  return <div>Hello</div>;
};

export default YoutubeChannels;
