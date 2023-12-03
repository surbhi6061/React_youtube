import React from "react";
import Comments from "./Comments";
const commentsData = [
  {
    name: "Surbhi kumari",
    text: "Lorem ipsum dolor sit awat,consectetur adip",
    replies: [
      {
        name: "Surbhi kumari",
        text: "Lorem ipsum dolor sit awat,consectetur adip",
      },
    ],
  },
  {
    name: "Surbhi kumari",
    text: "Lorem ipsum dolor sit awat,consectetur adip",

    replies: [
      {
        name: "Surbhi kumari",
        text: "Lorem ipsum dolor sit awat,consectetur adip",
      },
    ],
  },
  {
    name: "Surbhi kumari",
    text: "Lorem ipsum dolor sit awat,consectetur adip",
    replies: [
      {
        name: "Surbhi kumari",
        text: "Lorem ipsum dolor sit awat,consectetur adip",
      },
    ],
  },
  {
    name: "Surbhi kumari",
    text: "Lorem ipsum dolor sit awat,consectetur adip",

    replies: [
      {
        name: "Surbhi kumari",
        text: "Lorem ipsum dolor sit awat,consectetur adip",
      },
      {
        name: "Surbhi kumari",
        text: "Lorem ipsum dolor sit awat,consectetur adip",
      },
    ],
  },
];
// const CommentsList = ({ comments }) => {
//   return comments.map((comment, index) => (
//     <div >
//       <Comments id={index} data={comment} />
//       <div className="pl-5 border border-l-black ml-5">
//         <CommentsList comments={comment.replies} />
//       </div>
//     </div>
//   ));
// };
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="mt-2">
      <Comments id={index} data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border-l border-gray-800 ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
