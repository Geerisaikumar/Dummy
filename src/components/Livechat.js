import React, { useEffect, useState } from "react";
import Chatmessages from "./Chatmessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { GenerateComments, GenerateUsernames } from "../utils/helper";

const Livechat = () => {
  const [sendLiveMsg, setSendLiveMsg] = useState("");
  const dispatch = useDispatch();

  const chatMsgs = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("API Poll");

      dispatch(
        addMessages({
          name: GenerateUsernames(),
          messages: GenerateComments(15),
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className=" h-[475px] overflow-y-scroll flex flex-col-reverse">
        {chatMsgs.map((chat, index) => (
          <Chatmessages name={chat.name} messages={chat.messages} key={index} />
        ))}
      </div>

      <form
        className="ml-2 py-3 flex justify-around"
        onSubmit={(e) => {
          // console.log("On form Submit Msg", sendLiveMsg);
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Gabbar Singh",
              messages: sendLiveMsg,
            })
          );
          setSendLiveMsg("");
        }}
      >
        <input
          type="text"
          value={sendLiveMsg}
          className="w-72 px-3 py-1 rounded focus:outline-none"
          onChange={(e) => setSendLiveMsg(e.target.value)}
        />
        <button className="px-5 border bg-white hover:bg-gray-100 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Livechat;
