import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg" alt="background" />
            </div>

            <div>
                <form className="w-3/12 rounded-lg absolute right-0 left-0 mx-auto my-36 p-12 bg-black/80">
                    <h1 className="text-3xl py-4 text-white font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {
                        !isSignIn && (
                            <input type="text" placeholder="Full Name"
                            className="p-4 my-4 rounded w-full bg-gray-800" />
                        )
                    }
                    <input type="text" placeholder="Email Address"
                        className="p-4 my-4 rounded w-full bg-gray-800" />
                    <input type="password" placeholder="Password"
                        className="p-4 my-4 rounded w-full bg-gray-800" />
                    <button className="p-4 my-6 w-full bg-red-700 font-bold text-white rounded" >{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <p className="text-white cursor-pointer" onClick={handleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
                </form>
            </div>
        </div>
    );
}

export default Login