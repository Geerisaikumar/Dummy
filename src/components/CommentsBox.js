import React from "react";

const commentsData = [
  {
    name: "Saikumar Reddy",
    comment:
      "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
    replies: [
      {
        name: "Saikumar Reddy",
        comment:
          "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
        replies: [
          {
            name: "Saikumar Reddy",
            comment:
              "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
            replies: [
              {
                name: "Saikumar Reddy",
                comment:
                  "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
                replies: [
                  {
                    name: "Saikumar Reddy",
                    comment:
                      "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
                    replies: [
                      {
                        name: "Saikumar Reddy",
                        comment:
                          "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Saikumar Reddy",
    comment:
      "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
    replies: [
      {
        name: "Saikumar Reddy",
        comment:
          "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
        replies: [
          {
            name: "Saikumar Reddy",
            comment:
              "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
            replies: [
              {
                name: "Saikumar Reddy",
                comment:
                  "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
                replies: [
                  {
                    name: "Saikumar Reddy",
                    comment:
                      "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Saikumar Reddy",
    comment:
      "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
    replies: [
      {
        name: "Saikumar Reddy",
        comment:
          "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
        replies: [
          {
            name: "Saikumar Reddy",
            comment:
              "Hello World! This is a Earth 306. In this place We have a specifiv rules.",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex p-2 my-2 bg-gray-200 rounded-lg">
      <img
        alt="ProfileImg"
        className="h-11 "
        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
      />
      <div className="px-2">
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      {/* {console.log(comment)} */}
      <Comment data={comment} />
      <div className="ml-5 px-3 border border-l-black">
        {/* <Comment data={comment} />
        <Comment data={comment} /> */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsBox = () => {
  return (
    <div className="my-3">
      <p className="text-2xl font-bold">CommentsBox</p>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsBox;
