import { Outlet } from "react-router-dom";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

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
                            <Link className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"/"}>
                                    Home
                            </Link>
                            
                           <Link className="text-gray-400 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"products"}>
                                    Products
                            </Link>
                            
                            <Link className="text-gray-400 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={"cart"}>
                                Cart
                            </Link>
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