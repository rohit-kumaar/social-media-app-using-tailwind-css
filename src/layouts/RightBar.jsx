import React from "react";
import rohit from "assets/rohit.jpeg";

function RightBar() {
  return (
    // rightBar
    <div className="sticky top-[50px] h-[calc(100vh_-_50px)] flex-[3_3_0%] dark:bg-[#333]">
      {/* container  */}
      <div className="p-5">
        {/* item  */}
        <div className="mb-5 p-5 shadow-lg hover:shadow-indigo-500/40 dark:bg-[#222]">
          <span className="dark:text-[whitesmoke]  text-gray-500">Suggestions For You</span>
          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2 ">
            {/* userInfo  */}
            <div className="flex items-center gap-2">
              <img
                className="h-7 w-7 rounded-full object-cover "
                loading="lazy"
                src={rohit}
                alt="Rohit Kumar"
                title="Rohit Kumar"
              />
              <span className="dark:text-[whitesmoke] text-sm font-medium">Will Smith</span>
            </div>

            {/* buttons  */}
            <div className="flex gap-2">
            <button className="rounded-sm  bg-blue-600 px-2 text-white hover:scale-105">
                follow
              </button>
              <button className="rounded-sm  bg-red-600 px-2 text-white hover:scale-105">
                dismiss
              </button>
            </div>
          </div>
          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center gap-2">
              <img
                className="h-7 w-7 rounded-full object-cover "
                loading="lazy"
                src={rohit}
                alt="Rohit Kumar"
                title="Rohit Kumar"
              />
              <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
            </div>

            {/* buttons  */}
            <div className="flex gap-2">
              <button className="rounded-sm  bg-blue-600 px-2 text-white hover:scale-105">
                follow
              </button>
              <button className="rounded-sm  bg-red-600 px-2 text-white hover:scale-105">
                dismiss
              </button>
            </div>
          </div>
        </div>

        {/* item  */}
        <div className="mb-5 p-5 shadow-lg hover:shadow-indigo-500/40 dark:bg-[#222]">
          <span className="dark:text-[whitesmoke]  text-gray-500">Latest Activities</span>

          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center  gap-2">
              <img
                className="h-7 w-7 rounded-full object-cover "
                loading="lazy"
                src={rohit}
                alt="Rohit Kumar"
                title="Rohit Kumar"
              />

              <p className="dark:text[lightgray]">
                <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
                <span className="dark:text-[whitesmoke] text-xs text-gray-500">
                  changed their cover picture
                </span>
              </p>
            </div>
            <span className="dark:text-[whitesmoke] text-gray-500">1 min ago</span>
          </div>

          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center  gap-2">
              <img
                className="h-7 w-7 rounded-full object-cover "
                loading="lazy"
                src={rohit}
                alt="Rohit Kumar"
                title="Rohit Kumar"
              />

              <p className="dark:text[lightgray]">
                <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
                <span className="dark:text-[whitesmoke] text-xs text-gray-500"> like a post</span>
              </p>
            </div>
            <span className="dark:text-[whitesmoke] text-gray-500">1 min ago</span>
          </div>

          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center  gap-2">
              <img
                className="h-7 w-7 rounded-full object-cover "
                loading="lazy"
                src={rohit}
                alt="Rohit Kumar"
                title="Rohit Kumar"
              />

              <p className="dark:text[lightgray]">
                <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
                <span className="dark:text-[whitesmoke] text-xs text-gray-500"> liked a comment</span>
              </p>
            </div>
            <span className="dark:text-[whitesmoke] text-gray-500">1 min ago</span>
          </div>

          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center  gap-2">
              <img
                className="h-7 w-7 rounded-full object-cover "
                loading="lazy"
                src={rohit}
                alt="Rohit Kumar"
                title="Rohit Kumar"
              />

              <p className="dark:text[lightgray]">
                <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
                <span className="dark:text-[whitesmoke] text-xs text-gray-500"> posted</span>
              </p>
            </div>
            <span className="dark:text-[whitesmoke] text-gray-500">1 min ago</span>
          </div>
        </div>

        {/* item  */}
        <div className="mb-5 p-5 shadow-lg hover:shadow-indigo-500/40 dark:bg-[#222]">
          <span className="dark:text-[whitesmoke]  text-gray-500">Online Friends</span>
          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2 ">
            {/* userInfo  */}
            <div className="flex items-center gap-2">
              <div className="relative before:absolute before:right-0 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:content-['']">
                <img
                  className="  h-7 w-7 rounded-full object-cover "
                  loading="lazy"
                  src={rohit}
                  alt="Rohit Kumar"
                  title="Rohit Kumar"
                />
              </div>
              <span className="dark:text-[whitesmoke] text-sm font-medium">Will Smith</span>
            </div>
          </div>

          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center gap-2">
              <div className="relative before:absolute before:right-0 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:content-['']">
                <img
                  className="  h-7 w-7 rounded-full object-cover "
                  loading="lazy"
                  src={rohit}
                  alt="Rohit Kumar"
                  title="Rohit Kumar"
                />
              </div>

              <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
            </div>
          </div>
          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2 ">
            {/* userInfo  */}
            <div className="flex items-center gap-2">
              <div className="relative before:absolute before:right-0 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:content-['']">
                <img
                  className="  h-7 w-7 rounded-full object-cover "
                  loading="lazy"
                  src={rohit}
                  alt="Rohit Kumar"
                  title="Rohit Kumar"
                />
              </div>
              <span className="dark:text-[whitesmoke] text-sm font-medium">Will Smith</span>
            </div>
          </div>

          {/* user  */}
          <div className="my-2 flex items-center justify-between gap-2">
            {/* userInfo  */}
            <div className="flex items-center gap-2">
              <div className="relative before:absolute before:right-0 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:content-['']">
                <img
                  className="  h-7 w-7 rounded-full object-cover "
                  loading="lazy"
                  src={rohit}
                  alt="Rohit Kumar"
                  title="Rohit Kumar"
                />
              </div>

              <span className="dark:text-[whitesmoke] text-sm font-medium">John Deo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
