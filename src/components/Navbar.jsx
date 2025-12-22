import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Plus, Menu, X } from 'lucide-react';
import "../index.css";

const Navbar = () => {

    const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition";
    const activeClasses = "bg-gray-700 text-white";
    const inactiveClasses = "text-gray-700 hover:bg-gray-200";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const imgLogo = '../public/logo.png';
    return (
        <nav className='bg-white text-gray-600 shadow-md'>
            <div className='flex justify-between items-center p-3'>
                <div className='flex gap-4 items-center '>
                    <Link to="/">
                    <img width={"100"} height={"100"} src={imgLogo} alt="" />
                    </Link>
                    <NavLink to="/pipeline" className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses} hidden sm:block`}> Pipeline</NavLink>
                    <NavLink to="/opportunities" className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses} hidden sm:block`}> Opportunités</NavLink>
                    <NavLink to="/dashboard" className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses} hidden sm:block`}> Dashboard</NavLink>
                </div>

                <div className='flex items-center gap-2'>
                    <button type="button" className="flex items-center transition text-white bg-primary-btn hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-base text-sm px-3 py-2.5 text-center leading-5">
                        <Link to="/opportunities/ajouter" className='flex items-center'>
                            <Plus size={20} />Ajouter Opportunité
                        </Link>
                    </button>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden p-2 rounded-md hover:bg-gray-200 transition"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className='sm:hidden border-t border-gray-200 p-3 flex flex-col gap-2'>
                    <NavLink 
                        to="/pipeline" 
                        className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Pipeline
                    </NavLink>
                    <NavLink 
                        to="/opportunities" 
                        className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Opportunités
                    </NavLink>
                    <NavLink 
                        to="/dashboard" 
                        className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dashboard
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Navbar