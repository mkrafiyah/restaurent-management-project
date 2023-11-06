import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-amber-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><NavLink to='/'>Home</NavLink></a></li>
                        <li><a><NavLink to='/allFood'>All Food Items</NavLink></a></li>
                        <li><a><NavLink to='/blog'>Blog</NavLink></a></li>
                        <li>
                        <NavLink to='/profile'>Profile</NavLink>
                            <ul className="p-2">
                                <li><a>My added food items</a></li>
                                <li><a>Add a food item</a></li>
                                <li><a>My ordered food items</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl italic ml-0 mb-3">
                <img className="w-[60px] h-[60px] border-amber-950 rounded-full gap-0" src="https://i.ibb.co/hXzSvkN/R.jpg" alt="" />
                    Foodie</a>
                    
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a><NavLink to='/'>Home</NavLink></a></li>
                    <li><a><NavLink to='/allFood'>All Food Items</NavLink></a></li>
                    <li><a><NavLink to='/blog'>Blog</NavLink></a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary><NavLink to='/profile'>Profile</NavLink></summary>
                            <ul className="p-2 w-[200px]">
                                <li><a>My added food items</a></li>
                                <li><a>Add a food item</a></li>
                                <li><a>My ordered food items</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
            <NavLink to='/login'>
                
                <a className="btn btn-ghost btn-sm">Login</a>
           </NavLink> </div>
        </div>
    );
};

export default Navbar;