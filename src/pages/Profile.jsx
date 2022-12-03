import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import Posts from "components/Posts";
import { useTitle } from "hooks/useTitle";

function Profile() {
  useTitle("Profile");

  return (
    <div className="profile bg-bgSoft">
      {/* Profile Image Start  */}
      <div className="images relative h-[300px] w-full">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile Background Image"
          className=" h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="Profile Image"
          className="profilePic absolute left-0 right-0 top-[200px] m-auto h-[200px] w-[200px] rounded-full object-cover"
        />
      </div>
      {/* Profile Image End */}

      {/* Container Start  */}
      <div className="profileContainer p-[10px] lg:py-5 lg:px-[70px]">
        <div className="userInfo mb-5 mt-[100px] flex h-[33vh] flex-col items-center justify-between rounded-[20px] bg-white p-5 text-black shadow-lg lg:mt-0 lg:h-[240px] lg:flex-row lg:p-[50px] ">
          {/* Left Start  */}

          <div className="left flex-1">
            <a href="http://facebook.com" className="text-textColorSoft">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com" className="text-textColorSoft">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com" className="text-textColorSoft">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com" className="text-textColorSoft">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinteres.com" className="text-textColorSoft">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          {/* Left End  */}

          {/* Center Start  */}
          <div className="center flex flex-1 flex-col  items-center lg:pt-3">
            <span className="text-[30px] font-medium">Jane Doe</span>
            <div className="info flex w-full items-center justify-around lg:mb-2">
              <div className="item flex items-center gap-1 text-textColorSoft">
                <PlaceIcon />
                <span className="text-xs font-medium">IND</span>
              </div>
              <div className="item flex items-center gap-1 text-textColorSoft">
                <LanguageIcon />
                <span className="text-xs font-medium">rohit.dev</span>
              </div>
            </div>
            <button className="rounded-sm  bg-blue-600 px-2 text-white hover:scale-105">
              Follow
            </button>
          </div>
          {/* Center End  */}

          {/* Right Start */}
          <div className="right flex flex-1 items-center justify-end gap-2">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
          {/* Right End */}
        </div>
        {/* Posts Start  */}
        <Posts />
        {/* Posts End   */}
      </div>
      {/* Container End  */}
    </div>
  );
}

export default Profile;
