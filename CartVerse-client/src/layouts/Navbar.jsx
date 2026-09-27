import { NavLink } from "react-router";

const Navbar = () => {
    // NavLink guloke ekti variable-e rakha hoyeche jate mobile & desktop-e duplicate code likhte na hoy
    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold bg-primary/10" : "font-medium hover:text-primary"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/products" className={({ isActive }) => isActive ? "text-primary font-bold bg-primary/10" : "font-medium hover:text-primary"}>
                    All Products
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-bold bg-primary/10" : "font-medium hover:text-primary"}>
                    About
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4">
                
                {/* Mobile Menu & Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-2xl font-extrabold text-primary px-0">
                        ShopLogo
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>

                {/* Cart & Profile Menu */}
                <div className="navbar-end gap-2">
                    {/* Cart Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-base-200 transition-colors">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> 
                                </svg>
                                <span className="badge badge-sm badge-primary indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="card card-sm dropdown-content bg-base-100 z-10 mt-3 w-52 shadow-xl border border-base-200">
                            <div className="card-body p-4">
                                <span className="text-lg font-bold text-base-content">8 Items</span>
                                <span className="text-gray-500 mb-2">Subtotal: <span className="font-bold text-primary">$999</span></span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block rounded-full">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform">
                            <div className="w-10 rounded-full border-2 border-primary/20 p-0.5">
                                <img className="rounded-full" alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-base-200">
                            <li>
                                <a className="justify-between hover:text-primary">
                                    Profile <span className="badge badge-primary badge-sm text-white">New</span>
                                </a>
                            </li>
                            <li><a className="hover:text-primary">Settings</a></li>
                            <li className="mt-2 border-t border-base-200 pt-2"><a className="text-red-500 hover:bg-red-50 hover:text-red-600">Logout</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;