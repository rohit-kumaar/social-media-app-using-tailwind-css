import { AuthContext } from "context/authContext";
import React, { useContext } from "react";

function Stories() {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="mb-[30px] flex h-[250px] gap-[10px]">
      <div className="relative flex-1 overflow-hidden rounded-[10px]">
        <img
          className=" h-full w-full object-cover"
          loading="lazy"
          src={currentUser.profilePic.rohit}
          alt={currentUser.name}
          title={currentUser.name}
        />
        <span className="absolute bottom-3 left-3 font-medium text-white">
          {currentUser.name}
        </span>
        <button className="absolute bottom-10 left-3  h-6 w-6  rounded-[50px] bg-blue-600 text-white">
          +
        </button>
      </div>
      {stories.map((story) => (
        <div
          key={story.id}
          className="relative flex-1 overflow-hidden rounded-[10px]"
        >
          <img
            className="h-full w-full"
            loading="lazy"
            src={story.img}
            alt={currentUser.name}
            title={currentUser.name}
          />
          <span className="absolute bottom-3 left-3 font-medium text-white">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
