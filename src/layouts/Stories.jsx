import { AuthContext } from "context/authContext";
import { useContext } from "react";

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
    <div className="mb-[30px] flex h-[50px] justify-between gap-[10px] lg:h-[250px]">
      <div className="relative h-[50px] w-[50px] flex-none overflow-hidden rounded-full lg:h-full lg:flex-1 lg:rounded-[10px] ">
        <img
          className=" h-full w-full object-cover"
          loading="lazy"
          src={currentUser.profilePic.rohit}
          alt={currentUser.name}
          title={currentUser.name}
        />
        <span className="absolute bottom-3 left-3 hidden font-medium text-white">
          {currentUser.name}
        </span>
        <button className="absolute inset-0 m-auto h-6 w-6  rounded-full bg-blue-600  text-white lg:top-auto lg:bottom-10 lg:left-3 lg:m-0 ">
          +
        </button>
      </div>
      {stories.map((story) => (
        <div
          key={story.id}
          className="relative h-[50px] w-[50px] flex-none overflow-hidden rounded-full lg:h-full lg:flex-1 lg:rounded-[10px]"
        >
          <img
            className="h-full w-full"
            loading="lazy"
            src={story.img}
            alt={currentUser.name}
            title={currentUser.name}
          />
          <span className="absolute bottom-3 left-3 hidden font-medium text-white">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
