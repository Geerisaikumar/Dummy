import React from "react";
import Button from "./Button";

let buttonName = [
  "All",
  "Pawan Kalyan",
  "Cricket",
  "Javascript",
  "Dhoni",
  "IPL",
  "React",
  "Music",
  "Virat",
  "Namste React",
  "Cricket",
  //"Football",
  // "Cristiano Ronaldo",
  // "Amigos"
];

const Buttonlist = () => {
  return (
    <div className="flex items-center h-14 rounded sticky top-[4rem] bg-violet-500 pl-3 ">
      {buttonName.map((name, indx) => (
        <Button key={indx} name={name} />
      ))}
    </div>
  );
};

export default Buttonlist;
