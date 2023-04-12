import React from "react";

const commentsData = [
  {
    name: "Sai kumar",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    replies: [
      {
        name: "Sai kumar",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
  },
];

const Comments = () => {
  let { name, comment } = commentsData[0];
  return (
    <div className="mx-10 my-7 ">
      <h1 className="font-medium">Comments</h1>
      <p>{name}</p>
    </div>
  );
};

export default Comments;
