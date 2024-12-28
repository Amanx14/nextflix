import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const handleSignInForm = (e) => {
        setIsSignIn(!isSignIn);
    }

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const [errorMessage, setErrorMessage] = useState(null);

    const handleButtonClick = () => {
        // Validate Form Data
        const message = checkValidation(email.current.value, password.current.value, isSignIn ? null : name.current.value)
        setErrorMessage(message);

        if (message) {
            return
        }

        // SignUp
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('user signup', user)

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser ;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else { // Sign In 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('user signin', user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg" alt="background" />
            </div>

            <div>
                <form onSubmit={(e) => e.preventDefault()} className="w-3/12 rounded-lg absolute right-0 left-0 mx-auto my-36 p-8 bg-black/80">
                    <h1 className="text-2xl mb-2 text-white font-semibold">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {
                        !isSignIn && (
                            <input
                                ref={name}
                                type="text" placeholder="Full Name"
                                className="p-2 my-2 rounded w-full bg-gray-800 text-white" />
                        )
                    }
                    <input
                        ref={email}
                        type="text" placeholder="Email Address"
                        className="p-2 my-2 rounded w-full bg-gray-800 text-white" />
                    <input
                        ref={password}
                        type="password" placeholder="Password"
                        className="p-2 my-2 rounded w-full bg-gray-800 text-white" />

                    <p className="text-red-500 font-bold">{errorMessage}</p>
                    <button className="p-2 mt-8 w-full bg-red-700 font-bold text-white rounded"
                        onClick={handleButtonClick}
                    >{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <p className="text-white cursor-pointer mt-4" onClick={handleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
                </form>
            </div>
        </div>
    );
}

export default Login