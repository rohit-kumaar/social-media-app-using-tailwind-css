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
    // leftbar
    <div>
      {/* container  */}
      <div className=" p-5">
        {/* menu  */}
        <div className="flex flex-col gap-5">
          {/* user  */}
          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7 rounded-full object-cover "
              loading="lazy"
              src={rohit}
              alt="Rohit Kumar"
              title="Rohit Kumar"
            />
            <span>Rohit Kumar</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Friends}
              alt="Friends"
              title="Friends"
            />
            <span>Friends</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Groups}
              alt="Groups"
              title="Groups"
            />
            <span>Groups</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Market}
              alt="Market"
              title="Market"
            />
            <span>Marketplace</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Watch}
              alt="Watch"
              title="Watch"
            />
            <span>Watch</span>
          </div>

          <div className="flex items-center  gap-2">
            <img
              className="h-7 w-7"
              loading="lazy"
              src={Memories}
              alt="Memories"
              title="Memories"
            />
            <span>Memories</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
