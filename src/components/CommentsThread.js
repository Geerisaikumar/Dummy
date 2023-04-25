import React, { useEffect } from "react";
import { Comments_Thread, YOUTUBE_COMMENTS_THREAD } from "../utils/Constant";

const CommentsThread = () => {
  useEffect(() => {
    GenerateComments();
  }, []);

  const GenerateComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_THREAD);
    const json = await data.json();
    console.log(json.items[6].snippet.topLevelComment.snippet.textOriginal);
  };
  return <div>CommentsThread</div>;
};

export default CommentsThread;
