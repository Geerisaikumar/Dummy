import { useState, useEffect } from "react";
import {
  YOUTUBE_CHANNELS_API_URL,
  YOUTUBE_CHANNELS_BYID_API_URL,
  YOUTUBE_USERS_CHANNELS_API_URL,
  YOUTUBE_VIDEOS_API_URL,
} from "../utils/Constant";

const YoutubeChannels = () => {
  const [videos, setVideos] = useState([]);
  console.log("first");

  useEffect(() => {
    GetYoutubeChannels();
  }, []);

  const GetYoutubeChannels = async () => {
    const data = await fetch(YOUTUBE_CHANNELS_API_URL);
    const json = await data.json();
    setVideos(json);
    console.log(json.items);
  };
};

export default YoutubeChannels;
