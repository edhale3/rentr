import React from 'react'
import history from './History'

function Navbar(){

    function onClick(){
        return history.push('/post')
    }

    return (
        <div className="bg-gray-500 h-16 w-full z-10 fixed ">
            <h1 className="p-3 font-bold text-blue-200 text-2xl float-left">rent<span className="text-red-300">R</span></h1>
            <button onClick={onClick} className="p-3 mt-2 mr-2 bg-gray-700 rounded text-white float-right">Post an Item!</button>
        </div>
    )
}

export default Navbar