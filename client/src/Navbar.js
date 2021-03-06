import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){

    return (
        <div className="bg-gray-500 h-16 w-full z-10 fixed ">
            <Link to="/"><h1 className="p-3 font-bold text-teal-300 text-2xl float-left">rent<span className="text-red-600">R</span></h1></Link>
            <Link to='/post' type="button" className="p-3 mt-2 mr-2 bg-gray-700 rounded text-white float-right active:bg-gray-600">Post an Item!</Link>
        </div>
    )
}

export default Navbar