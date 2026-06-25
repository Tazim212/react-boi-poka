import React from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, SignOut } = useAuth()

    const handleSignOut = () => {
        SignOut()
            .then()
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='bg-linear-to-l from-blue-950 to-cyan-500'>
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

            <div className="flex justify-around items-center">
                <label htmlFor="my-drawer-1" className="btn btn-accent lg:hidden"><LuAlignLeft className='text-2xl'></LuAlignLeft></label>

                <Link to="/"><h1 className='text-xl md:text-2xl font-bold -ml-1 md:ml-0'>Book Vibes</h1></Link>

                <ul className="hidden lg:flex px-10">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li className='px-2'>Home</li></NavLink>

                    {user && <NavLink to="/listedbooks" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li className='px-2'>Listed Books</li></NavLink>}

                    <NavLink to="/pagestoread" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li className='pl-3'>Pages To Read</li></NavLink>
                    <NavLink to="/contactus" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li className='pl-3'>Contact Us</li></NavLink>

                </ul>

                <div className='my-3 flex gap-2 items-center'>
                    <p>{user?.displayName}</p>
                    {
                        user ?
                            <Link><button onClick={handleSignOut} className='btn btn-secondary rounded-md'>Sign Out</button></Link>
                            :
                            <Link to="/login"><button className='btn btn-secondary rounded-md'>Sign In</button></Link>

                    }
                    {/* <button className='btn btn-success rounded-md'>Sign Up</button> */}
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-linear-to-t from-emerald-700 to-blue-800 min-h-full w-80 p-4">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li className='py-2'>Home</li></NavLink>
                    <NavLink to="/listedbooks" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li className='pb-2'>Listed Books</li></NavLink>
                    <NavLink to="/pagestoread" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li>Pages To Read</li></NavLink>
                    <NavLink to="/contactus" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }><li>Contact Us</li></NavLink>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;

{/* <NavLink><li className='px-2'>Home</li></NavLink>
                    <NavLink><li className='px-2'>Listed Books</li></NavLink>
                    <NavLink><li>Pages To Read</li></NavLink> */}