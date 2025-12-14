import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link, NavLink } from 'react-router-dom';
import { Plus } from 'lucide-react';


const Navbar = () => {

    const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition";
    const activeClasses = "bg-gray-800 text-white";
    const inactiveClasses = "text-gray-600 hover:bg-gray-200";

    return (
        <nav className='flex justify-between items-center p-3 bg-white text-gray-600 shadow-md'>
            <div className='flex gap-4 items-center'>
                <Link to="/">CRM</Link>
                <NavLink to="/pipeline" className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}> Pipeline</NavLink>
                <NavLink to="/opportunities" className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}> Opportunités</NavLink>
                <NavLink to="/dashboard" className={({isActive}) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}> Dashboard</NavLink>
            </div>
            <div className='flex items-center'>
                <button type="button" className="flex items-center transition text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-base text-sm px-3 py-2.5 text-center leading-5">
                    <Link to="/opportunities/ajouter" className='flex items-center'>
                        <Plus size={20} />Ajouter Opportunité
                    </Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar