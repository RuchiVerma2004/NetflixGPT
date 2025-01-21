import Login from "./Login";
import Browser from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () =>{

    const dispatch = useDispatch();
   
    useEffect(()=>{ 
        onAuthStateChanged(auth, (user) => {
            if (user) {
        
              const{email, uid, displayName, photoURL} = user;
                dispatch(addUser({email : email, uid : uid, displayName : displayName, photoURL : photoURL}));
               
            } else {
                dispatch(removeUser());
            
            }
          });
    },[]);

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browser/>
        }
    ]);

    return(
        <div>
            <RouterProvider router={appRouter}/>
               
        </div>
    );

};

export default Body;