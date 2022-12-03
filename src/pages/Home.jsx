import Posts from "components/Posts";
import { useTitle } from "hooks/useTitle";
import Stories from "layouts/Stories";

function Home() {
  useTitle("Home");

  return (
    <div className="py-5 px-2 dark:bg-[#333] lg:px-[70px]">
      <Stories />
      <Posts />
    </div>
  );
}

export default Home;
