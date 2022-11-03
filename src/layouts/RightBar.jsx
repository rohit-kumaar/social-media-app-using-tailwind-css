import React from "react";
import rohit from "assets/rohit.jpeg";

function RightBar() {
  return (
    // rightBar
    <div className="sticky top-[50px] h-[calc(100vh_-_50px)] flex-[3_3_0%]">
      {/* container  */}
      <div className="p-5">
        {/* item  */}
        <div className="p-5 shadow-lg hover:shadow-indigo-500/40">
          <span className=" text-gray-500">Suggestions For You</span>
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
              <span className="text-sm font-medium">Will Smith</span>
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
              <span className="text-sm font-medium">John Deo</span>
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
      </div>
    </div>
  );
}

export default RightBar;
