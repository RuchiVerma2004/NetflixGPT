import Header from "./Header";
import { useState } from "react";
const Login = ()=>{

    const [isSignInForm, setIsSignInForm]  = useState(true);

    const toggleSignInForm = () =>{
        return (setIsSignInForm(!isSignInForm));
    }

    return (
        <div className = "" >
            <Header />
            <div className="absolute">
                <img 
                    src ="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg"
                    alt = "logo"
                />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
                <h1 className="font-bold text-3xl py-4 text-white"> {isSignInForm ? "Sign In" : "Sign Up"}</h1> 
                {!isSignInForm && (
                    <input 
                        type="text"
                        placeholder="Full Name"
                        className="p-2 mt-4 w-full bg-slate-700"
                    />
                )}
                <input type="text" placeholder="Email Address" className="p-2 mt-4 w-full bg-slate-700" />
                <input type="password" placeholder="Password" className="p-2 mt-4 w-full bg-slate-700" />
                <button className="p-2 mt-6 w-full bg-red-700 text-white">Sign In</button>  
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already registered? Sign In Now."

                    }
                </p>
            </form>

        </div>
    );
}

export default Login;