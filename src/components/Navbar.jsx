import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-3 bg-white text-gray-600 shadow-md'>
            <div className='flex gap-4 items-center'>
                <h1>CRM</h1>
                <Link to="/pipeline"> Pipeline</Link>
                <Link to="/opportunites"> Opportunités</Link>
                <Link to="/dashboard"> Dashboard</Link>
            </div>
            <div className='flex items-center'>
                <button type="button" class="flex items-center transition text-white bg-gradient-to-br from-purple-600 to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-3 py-2.5 text-center leading-5">
                    <Link to="/opportunites/ajouter" className='flex items-center'>
                         Ajouter Opportunité
                    </Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar