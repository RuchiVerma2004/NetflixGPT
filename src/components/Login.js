import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("true");

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="background"
          className="bg-gradient-to-t from-black"
        />
      </div>
      <div className="absolute z-20 w-full">
        <form className="p-12 bg-black w-3/12  my-44 mx-auto text-white rounded-lg bg-opacity-75">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm  && (
            <input
              type="text"
              placeholder="Name"
              className="p-2 my-2 bg-gray-700 text-black w-full rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-2 my-2 bg-gray-700 text-black w-full rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 bg-gray-700 text-black w-full rounded-lg"
          />
          <button className="p-2 my-4 bg-red-700 w-full rounded-lg ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-6 cursor-pointer" onClick={handleSignIn}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
