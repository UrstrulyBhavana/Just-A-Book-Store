import { Outlet, NavLink } from "react-router-dom";

import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex items-center">
                                <div className="md:block">
                                    <div className="flex items-baseline space-x-6">
                                        <NavLink 
                                            className={({ isActive }) =>
                                                isActive 
                                                    ? "text-blue-600 bg-blue-100 px-4 py-2 rounded-md text-sm font-medium"
                                                    : "text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium"
                                            } 
                                            to={"/"} 
                                            end
                                        >
                                            Home
                                        </NavLink>
                                        
                                        <NavLink 
                                            className={({ isActive }) =>
                                                isActive 
                                                    ? "text-blue-600 bg-blue-100 px-4 py-2 rounded-md text-sm font-medium"
                                                    : "text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium"
                                            } 
                                            to={"products"} 
                                            end
                                        >
                                            Products
                                        </NavLink>
                                        
                                        <NavLink 
                                            className={({ isActive }) =>
                                                isActive 
                                                    ? "text-blue-600 bg-blue-100 px-4 py-2 rounded-md text-sm font-medium"
                                                    : "text-gray-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium"
                                            } 
                                            to={"cart"}
                                        >
                                            Cart
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <a className="flex-shrink-0" href="/">
                                    <img className="h-8" src={logo} alt="Workflow"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <Outlet />
        </>
    );
};

export default Navbar;
