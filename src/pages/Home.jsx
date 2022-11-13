import Posts from "components/Posts";
import Stories from "layouts/Stories";
import React from "react";

function Home() {
  return (
    <div className="py-5 px-[70px] dark:bg-[#333]">
      <Stories />
      <Posts />
    </div>
  );
}

export default Home;
