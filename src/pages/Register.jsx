import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";
import { useTitle } from "hooks/useTitle";

function Register() {
  useTitle("Sign up");
  
  return (
    <div className="flex h-screen items-center justify-center bg-purple-400 ">
      {/* card  */}
      <div className="flex min-h-[600px] w-3/4 rounded-[10px] bg-white ">
        {/* right  */}
        <div className="flex flex-1 flex-col gap-12 p-12">
          <h1 className="text-3xl font-bold text-[#555]">Register</h1>
          <form className="flex flex-col gap-8">
            <input
              type="text"
              placeholder="Username"
              className="border-b-2 py-5 px-2 focus:z-10 focus:border-purple-600 focus:outline-none focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 py-5 px-2 focus:z-10 focus:border-purple-600 focus:outline-none focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 py-5 px-2 focus:z-10 focus:border-purple-600 focus:outline-none focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 py-5 px-2 focus:z-10 focus:border-purple-600 focus:outline-none focus:ring-purple-600"
            />

            <button className="w-1/2 border-none  bg-purple-500 p-3 font-bold text-white hover:bg-purple-600">
              Register
            </button>
          </form>
        </div>
        {/* left  */}
        <div className="flex flex-1  flex-col gap-6 rounded-tr-[10px]   rounded-br-[10px] bg-register bg-top  bg-no-repeat p-12 text-white">
          <h1 className="text-8xl  leading-[100px]">Hello World.</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consequatur earum, animi quis incidunt cumque iure deserunt
            molestias perferendis illo exercitationem, magni debitis vitae,
            harum vel mollitia ullam odio facilis!
          </p>

          <span className="text-sm">Do you have an account?</span>
          <Link to={ROUTE_PATH.Login}>
            <button className="w-1/2 border-none bg-white p-3 font-bold text-purple-600 hover:bg-purple-600 hover:text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
