import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

export default function DropDowm() {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user);
    const handleLogoutasync = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    };
    const handleMenu = () => {
        setActive(!active)
    }
    const goToSave = () => {
        navigate('/account')
        setActive(false)
    }
    const classMenu = ['absolute', 'right-0', 'z-10', 'mt-2', 'w-56', 'origin-top-right', 'rounded-md', 'bg-black/80', 'shadow-lg', 'ring-1', 'ring-black', 'ring-opacity-5', 'focus:outline-none', active ? 'opacity-100' : 'opacity-0']
    return (

        <>
            <div className="relative inline-block text-left">
                <div onClick={handleMenu} className="flex items-center cursor-pointer">
                    <img className="w-6 h-6 rounded-md md:w-8 md:h-8" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="avatar" />
                    <svg className="-mr-1 ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={classMenu.join(" ")} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        <Link to={'/'} className="text-white block px-4 py-2 text-sm hover:underline" role="menuitem" tabIndex={-1} id="menu-item-0">{`Signed in as ${user.email}`}</Link>
                        <hr />
                        <Link to={'/'} className="text-white block px-4 py-2 text-sm hover:underline" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</Link>
                        <div onClick={goToSave} className="text-white block px-4 py-2 text-sm hover:underline cursor-pointer" role="menuitem" tabIndex={-1} id="menu-item-2">My Movies</div>
                        <Link to={'/'} className="text-white block px-4 py-2 text-sm hover:underline" role="menuitem" tabIndex={-1} id="menu-item-1">Support</Link>
                        <Link to={'/'} className="text-white block px-4 py-2 text-sm hover:underline" role="menuitem" tabIndex={-1} id="menu-item-2">License</Link>
                        <hr />
                        <button onClick={handleLogoutasync} type="submit" className="text-white block w-full px-4 py-2 text-left text-sm hover:underline" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>

                    </div>
                </div>
            </div>

        </>
    )
}
