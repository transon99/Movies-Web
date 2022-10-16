import React, { useEffect, useState } from "react";
import LogoNetflix from "../../assets/images/Logo.png";
import { MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/userSlice";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import DropDown from "../DropDown/DropDowm";

export const Navbar = () => {
  const user = useSelector(state => state.user.user)
  const [keywords, setKetwords] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          login({
            email: currentUser.email,
          }),
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unSubscribed();
    };
  }, [dispatch]);
  const handleScrollY = () => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
  }
  useEffect(() => {
    handleScrollY();
    window.addEventListener('scroll', handleScrollY);
    return () => { window.removeEventListener('scroll', handleScrollY) }
  }, [])
  const navigate = useNavigate()
  const handleChange = (e) => {
    const keywords = e.target.value;
    setKetwords(keywords);
    keywords.length > 0 ? navigate(`/search?keywords=${keywords}`) : navigate('/')
  }
  const goHome = () => {
    navigate('/')
  }
  const classNav = ['px-4', 'flex', 'items-center', 'justify-between', 'z-10', 'fixed', 'w-full', scrollY < 50 ? 'bg-transparent transition duration-500 ease-in-out' : 'bg-black/80 transition duration-500 ease-in-out']

  const handleLogoutasync = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classNav.join(' ')}>
      <div className="flex items-center cursor-pointer " onClick={goHome}>
        <img
          className="w-[80px] md:w-[120px]"
          src={LogoNetflix}
          alt="netflix"
        />
        <div className="flex md:p-6  items-center relative ml-2">
          <div className="flex items-center">
            <MdSearch className="absolute w-5 h-5 cursor-pointer text-white z-1" />
          </div>
          <div>
            <input
              onChange={handleChange}
              value={keywords}
              placeholder="Enter title, genres, people"
              type='text'
              className="
                    border-[1px] border-white outline-none rounded-md opacity-0 bg-inherit text-white z-2
                    w-0 cursor-pointer pr-[20px]
                    transition-width duration-500 
                    focus:pl-[22px] focus:cursor-text focus:opacity-100 focus:w-[185px]
                    
                    md:focus:w-[300px]
                    "
            />
          </div>
        </div>
      </div>
      {user?.email ?

        // <div className="flex items-center cursor-pointer">
        //   <img className="w-6 h-6 rounded-md md:w-8 md:h-8" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="avatar" />
        //   <span className="ml-2 w-0 h-0 
        //     border-l-[5px] border-l-transparent
        //     border-t-[5px] border-t-white
        //     border-r-[5px] border-r-transparent"></span>
        // </div>
        // <div className="flex items-center">
        //   <Link to={'/account'}>
        //     <div className="text-white mr-3">Account</div>
        //   </Link>
        //   <div className="text-white bg-red-600 md:py-2 md:px-4 rounded-md p-1 cursor-pointer" onClick={handleLogoutasync}>Logout</div>

        // </div>
        <DropDown />
        :

        <Link to={'/login'}>
          <div className="text-white bg-red-600 md:py-2 md:px-4 rounded-md p-1">Login</div>
        </Link>
      }

    </div>
  );
};
