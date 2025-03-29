import React, {useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGPTSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleGPTSearch = ()=> {
    // toggle GPT Search component
    dispatch(toggleGPTSearchView());
  }

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return ()=> unsubsribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img
        className='w-44'
        src={LOGO} alt="Netflix Logo" />

      {
        user && (
          <div className='flex items-center gap-2'>
            <select>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <button className='p-2 rouneded bg-purple-500 rounded mx-4 font-semibold text-white'
            onClick={handleGPTSearch}
            >GPT Search</button>
            <img className="h-10 rounded-md" src={user?.photoURL} alt="photoURL" />
            <button className='bg-red-600 text-white p-2 rounded font-semibold' onClick={handleSignOut}>Sign Out</button>
          </div>
        )
      }
    </div>


  )
}

export default Header;