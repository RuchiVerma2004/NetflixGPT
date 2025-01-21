
import { useState, useRef } from "react";
import Header from "./Header";
import CheckValidData from "../utils/CheckValidData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState("true");
  const [errorMessage, setErrorMessage] = useState(null);
  const name  = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    
    // Validate the form data
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message )return;

    if(!isSignInForm){

      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://avatars.githubusercontent.com/RuchiVerma2004"
          }).then(() => {
            const{email, uid, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
                email : email, 
                uid : uid, 
                displayName : displayName, 
                photoURL : photoURL
              })
            );
                        
            // Profile updated!
            navigate("/Browse");
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode+"-"+errorMessage);
        navigate("/");
      });

    }else{

      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/Browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
        navigate("/");
      });
    
    }

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
        <form className="p-12 bg-black w-3/12  my-44 mx-auto text-white rounded-lg bg-opacity-75" onSubmit={(e) => e.preventDefault()} >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm  && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-2 my-2 bg-gray-700 text-white w-full rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-2 my-2 bg-gray-700 text-white w-full rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 bg-gray-700 text-white w-full rounded-lg"
          />
          <p className="text-red-700 font-semibold text-lg py-2">{errorMessage}</p>
          <button className="p-2 my-4 bg-red-700 w-full rounded-lg " onClick={handleButtonClick} onSubmit={(e) => e.preventDefault()}> 
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
