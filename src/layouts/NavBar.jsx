import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AuthContext } from "context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";
import rohit from "assets/rohit.jpeg";

function NavBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    // navbar
    <div className=" sticky top-0 z-50 flex h-[50px] justify-between border-b-2 bg-white py-[10px] px-5 dark:border-[#444] dark:bg-[#222] dark:text-[whitesmoke]">
      {/* left  */}
      <div className="flex items-center gap-3">
        <Link to={ROUTE_PATH.Home}>
          <span className="text-xl font-bold text-blue-700 dark:text-white">
            Social
          </span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        {/* search  */}
        <div className="flex items-center gap-[10px] rounded-md border-2 p-1 dark:border-[#444]   ">
          <SearchOutlinedIcon />
          <input
            type="search"
            placeholder="Search..."
            className="w-[500px]  bg-transparent focus:outline-none "
          />
        </div>
      </div>
      {/* right  */}
      <div className="flex items-center gap-5">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        {/* user  */}
        <div className="flex items-center gap-2 font-medium">
          <img
            className="h-7 w-7 rounded-full object-cover "
            loading="lazy"
            src={currentUser.profilePic.rohit}
            alt={currentUser.name}
            title={currentUser.name}
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
