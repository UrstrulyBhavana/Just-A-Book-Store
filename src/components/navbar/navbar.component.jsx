import { Outlet, NavLink } from "react-router-dom";

import logo from '../../assets/logo.png';

const Navbar = () => {

    return (
        <>
                        
            <div>
                <nav className="bg-white dark:bg-gray-800  ">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className=" flex items-center">
                                <div className="md:block">
                                    <div className="flex items-baseline space-x-4">
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-gray-800 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-400  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                                            } to={"/"} end>
                                                Home
                                        </NavLink>
                                        
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-gray-800 px-3 py-2 rounded-md text-sm font-medium" : "text-gray-400 px-3  hover:text-gray-800 py-2 rounded-md text-sm font-medium"
                                            } to={"products"} end>
                                                Products
                                        </NavLink>
                                        
                                        <NavLink className={({ isActive }) =>
                                            isActive ? "text-gray-800px-3 py-2 rounded-md text-sm font-medium" : "text-gray-400 px-3 py-2  hover:text-gray-800 rounded-md text-sm font-medium"
                                            } to={"cart"}>
                                            Cart
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="block">                   
                                <a className="flex-shrink-0" href="/">
                                    <img className="h-4" src={logo} alt="Workflow"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            <Outlet />
        </>
    )
}

export default Navbar;