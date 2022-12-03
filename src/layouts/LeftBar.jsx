import React from "react";
import rohit from "assets/rohit.jpeg";
import Friends from "assets/1.png";
import Groups from "assets/2.png";
import Market from "assets/3.png";
import Watch from "assets/4.png";
import Memories from "assets/5.png";
import Events from "assets/6.png";
import Gaming from "assets/7.png";
import Gallery from "assets/8.png";
import Videos from "assets/9.png";
import Messages from "assets/10.png";
import Tutorials from "assets/11.png";
import Courses from "assets/12.png";
import Fund from "assets/13.png";

function LeftBar() {
  return (
    // leftBar
    <div className="sticky top-[50px] hidden h-[calc(100vh_-_50px)] flex-[2_2_0%] bg-white dark:bg-[#222] dark:text-[lightgray] lg:block">
      {/* container  */}
      <div className=" p-5">
        {/* menu  */}
        <div className="flex flex-col gap-2">
          {/* user  */}
          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7 rounded-full object-cover "
              loading="lazy"
              src={rohit}
              alt="Rohit Kumar"
              title="Rohit Kumar"
            />
            <span className="text-sm">Rohit Kumar</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Friends}
              alt="Friends"
              title="Friends"
            />
            <span className="text-sm">Friends</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Groups}
              alt="Groups"
              title="Groups"
            />
            <span className="text-sm">Groups</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Market}
              alt="Market"
              title="Market"
            />
            <span className="text-sm">Marketplace</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Watch}
              alt="Watch"
              title="Watch"
            />
            <span className="text-sm">Watch</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Memories}
              alt="Memories"
              title="Memories"
            />
            <span className="text-sm">Memories</span>
          </div>
        </div>

        <hr className="my-5 mx-0 h-[0.5px] border-0 bg-gray-200 dark:bg-[#444]" />
        {/* menu  */}
        <div className="flex flex-col gap-2">
          <span className="text-xs">Your shortcuts</span>
          {/* user  */}
          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Events}
              alt="Events"
              title="Events"
            />
            <span className="text-sm">Events</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Gaming}
              alt="Gaming"
              title="Gaming"
            />
            <span className="text-sm">Gaming</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Gallery}
              alt="Gallery"
              title="Gallery"
            />
            <span className="text-sm">Gallery</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Videos}
              alt="Videos"
              title="Videos"
            />
            <span className="text-sm">Videos</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Messages}
              alt="Messages"
              title="Messages"
            />
            <span className="text-sm">Messages</span>
          </div>
        </div>
        <hr className="my-5 mx-0 h-[0.5px] border-0 bg-gray-200 dark:bg-[#444]" />
        {/* menu  */}
        <div className="flex flex-col gap-2">
          <span className="text-xs">Others</span>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Fund}
              alt="Fund"
              title="Fund"
            />
            <span className="text-sm">Fundraiser</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Tutorials}
              alt="Tutorials"
              title="Tutorials"
            />
            <span className="text-sm">Tutorials</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Courses}
              alt="Courses"
              title="Courses"
            />
            <span className="text-sm">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
