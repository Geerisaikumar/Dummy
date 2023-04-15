// import React from "react";

// const commentsData = [
//   {
//     name: "Sai kumar",
//     comment:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     replies: [
//       {
//         name: "Sai kumar",
//         comment:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         replies: [
//           {
//             name: "Sai kumar",
//             comment:
//               "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//             replies: [
//               {
//                 name: "Sai kumar",
//                 comment:
//                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//               },
//               {
//                 name: "Sai kumar",
//                 comment:
//                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//                 replies: [
//                   {
//                     name: "Sai kumar",
//                     comment:
//                       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Sai kumar",
//     comment:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     replies: [
//       {
//         name: "Sai kumar",
//         comment:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       },
//     ],
//   },
// ];

// const Comment = ({ data }) => {
//   const { name, comment, replies } = data;
//   return (
//     <div className="flex bg-gray-100 p-2 rounded-lg ">
//       <img
//         alt="profile-img"
//         className="h-11 mx-2 "
//         src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
//       />
//       <div>
//         <p className="font-bold">{name}</p>
//         <p>{comment}</p>
//       </div>
//     </div>
//   );
// };

// const CommentList = ({ comments }) => {
//   return comments.map((comment) => (
//     <div>
//       <Comment data={comment} />
//       <div>
//         <CommentList comments={comment.replies} />
//       </div>
//     </div>
//   ));
// };

// const CommentsBox = () => {
//   return (
//     <div className="p-8 m-2 ">
//       <p className="text-2xl font-bold">Comments</p>
//       <CommentList data={commentsData} />
//     </div>
//   );
// };

// export default CommentsBox;

import React from "react";

const commentsData = [
  {
    name: "Saikumar Reddy",
    comment:
      "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
    replies: [
      {
        name: "Saikumar Reddy",
        comment:
          "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
        replies: [
          {
            name: "Saikumar Reddy",
            comment:
              "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
            replies: [
              {
                name: "Saikumar Reddy",
                comment:
                  "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
                replies: [
                  {
                    name: "Saikumar Reddy",
                    comment:
                      "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
                    replies: [
                      {
                        name: "Saikumar Reddy",
                        comment:
                          "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
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
      "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
    replies: [
      {
        name: "Saikumar Reddy",
        comment:
          "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
        replies: [
          {
            name: "Saikumar Reddy",
            comment:
              "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
            replies: [
              {
                name: "Saikumar Reddy",
                comment:
                  "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
                replies: [
                  {
                    name: "Saikumar Reddy",
                    comment:
                      "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
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
      "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
    replies: [
      {
        name: "Saikumar Reddy",
        comment:
          "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
        replies: [
          {
            name: "Saikumar Reddy",
            comment:
              "Hello World! This is a Earth 306. In this place We have a specifiv rules you should Follow it Blindly",
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
  return comments.map((comment) => (
    <div>
      {console.log(comment)}
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
    <div className="mx-10 my-3">
      <p className="text-2xl font-bold">CommentsBox</p>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsBox;
