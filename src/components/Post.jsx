import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
import { useState } from "react";
import { ROUTE_PATH } from "routes/routePath";

function Post({ post }) {
  return (
    <div className="post">
      <div className="container ">
        <div className="user flex items-center justify-between">
          <div className="userInfo flex items-center justify-center gap-5">
            <img
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
              src={post.img}
              alt=""
              title=""
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
        <div className="content"></div>
        <div className="info"></div>
      </div>
    </div>
  );
}

export default Post;
