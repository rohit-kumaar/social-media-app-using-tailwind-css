import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
import { useState } from "react";
import Comments from "./Comments";

function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState(false);

  // TEMPERER
  const liked = false;

  return (
    <div className="post mb-4 rounded-lg bg-white  px-3 pt-3 shadow-lg">
      <div className="container ">
        <div className="user flex items-center justify-between rounded-xl bg-white  py-2 ">
          <div className="userInfo flex items-center justify-center gap-5">
            <img
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
              src={post.profilePic}
              alt={post.name}
              title={post.name}
            />
            <div className="details flex  flex-col">
              <Link to={`/profile/${post.userId}`}>
                <span className="font-medium">{post.name}</span>
              </Link>
              <span className="date text-3 ">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content ">
          <p>{post.desc}</p>
          <img
            loading="lazy"
            src={post.img}
            alt={post.name}
            title={post.name}
            className="mt-5 max-h-[400px] w-full object-cover"
          />
        </div>
        <div className="info flex items-center gap-3 py-4">
          <div className="item  flex cursor-pointer items-center gap-2 text-sm">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className="item  flex cursor-pointer items-center gap-2 text-sm"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item  flex cursor-pointer items-center gap-2 text-sm">
            <ShareOutlinedIcon />
            12 Shares
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}

export default Post;
