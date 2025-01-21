import {LOGO} from '../utils/constants';
import {USER_AVATAR} from '../utils/constants';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Heading = ()=>{

    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);

    const handleSignOut = () => {    
            signOut(auth)
              .then(() => {
                navigate("/");
              })
              .catch((error) => {
                navigate("/error");
              });
        };

    return (


        <div className="absolute px-8 py-2 bg-gradient-to-b from-black  z-10 w-screen flex justify-between">
          
            {/* <h1 className="text-3xl font-bold font-mono text-red-600">STREAMX</h1> */}
        
            <img 
                src={LOGO} 
                alt="Netflix Logo" 
                className="w-40 "
            />
           {user && (<div className=" flex p-2 items-center">
                <img 
                    src={user.photoURL} 
                    alt="User Avatar" 
                    className="w-10 h-10 "
                />
                <button onClick={handleSignOut} className='p-4 font-semibold text-white'>Sign Out</button>
            </div>)}
        </div>
    );
};

export default Heading;