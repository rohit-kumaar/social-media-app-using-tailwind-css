import { AuthContext } from "context/authContext";
import React, { useContext } from "react";

function Comments() {
  const { currentUser } = useContext(AuthContext);

  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="comments">
      <div className="write my-5 flex items-center justify-between gap-5">
        <img
          loading="lazy"
          src={currentUser.profilePic.rohit}
          alt={currentUser.name}
          title={currentUser.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <input
          type="text"
          placeholder="Write a comment"
          className="w-full rounded-md border-2 p-[10px]"
        />

        <button className="rounded-md bg-blue-600 py-3 px-2 text-white">
          Send
        </button>
      </div>

      {comments.map((comment) => (
        <div className="comment my-7 flex  justify-between gap-3">
          <img
            loading="lazy"
            src={comment.profilePicture}
            alt={comment.name}
            title={comment.name}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="info flex flex-[5] flex-col">
            <span className="font-medium">{comment.name}</span>
            <p className="text-justify">{comment.desc}</p>
          </div>

          <span className="date self-center text-sm text-gray-500">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
