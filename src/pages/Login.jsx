import React from "react";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-purple-400 ">
      {/* card  */}
      <div className="flex min-h-[600px] w-3/4 rounded-[10px] bg-white">
        {/* left  */}
        <div className="flex  flex-1 flex-col gap-6 bg-[url('/src/assets/login.jpg')] bg-contain bg-center bg-no-repeat p-12">
          <h1 className="text-8xl  leading-[100px]">Hello World.</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consequatur earum, animi quis incidunt cumque iure deserunt
            molestias perferendis illo exercitationem, magni debitis vitae,
            harum vel mollitia ullam odio facilis!
          </p>

          <span className="text-sm">Don't you have an account?</span>
          <button className="w-1/2 border-none bg-purple-600 bg-gradient-to-r p-3 font-bold text-white hover:from-purple-700 hover:to-purple-500">
            Register
          </button>
        </div>
        {/* right  */}
        <div className="flex flex-1 flex-col gap-12 p-12">
          <h1 className="text-3xl font-bold text-[#555]">Login</h1>
          <form className="flex flex-col">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
