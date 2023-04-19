import React from "react";
import Buttonlist from "./Buttonlist";
import Videocontainer from "./Videocontainer";
import Shimmer from "./Shimmer";

const Maincontainer = () => {
  return (
    <div className="w-full ">
      <Buttonlist />
      <Videocontainer />
    </div>
  );
};

export default Maincontainer;
