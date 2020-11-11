import React from 'react'
import Navbar from './Navbar'

export default function Post () {
    return (
        <div className="bg-gray-300 h-screen bg-fixed overflow-auto">
            <Navbar />
            <div className="grid grid-cols-1 justify-items-center">
                <h3 className="mt-20 text-gray-800 font-bold">Lend an Item</h3>
                <div className="p-3 bg-white mx-4 mt-4 w-11/12 lg:w-9/12 xl:w-1/2 rounded-md">
                    <form className="relative">
                        <input type="text" placeholder="Item" className="text-gray-700 pl-1 w-1/2 font-sm outline-none border-solid border-b-2 rounded focus:border-gray-600"></input>
                        <select className="flex mt-3 font-sm -ml-1 text-gray-700 outline-none" placeholder="Category">
                            <option value="" className="text-gray-500" selected disabled hidden>Category</option>
                            <option value="general" className="">General</option>
                            <option value="antiques">Antiques</option>
                            <option value="appliances">Appliances</option>
                            <option value="artscrafts">Arts+Crafts</option>
                            <option value="atvutvsno">ATV/UTV/SNO</option>
                            <option value="babykid">Baby+Kid</option>
                            <option value="bikes">Bikes</option>
                            <option value="boats">Boats</option>
                            <option value="books">Books</option>
                            <option value="camping">Camping/RV's</option>
                            <option value="carstrucks">Cars+Trucks</option>
                            <option value="multimedia">DVD/CD/VHS</option>
                            <option value="cellphones">Cellphones</option>
                            <option value="clothing">Clothing</option>
                            <option value="computer">Computer</option>
                            <option value="electronics">Electronics</option>
                            <option value="farmgarden">Farm+Garden</option>
                            <option value="furniture">furniture</option>
                            <option value="equipment">Heavy Equipment</option>
                            <option value="jewelry">Jewelry</option>
                            <option value="lodging">Lodging</option>
                            <option value="motorcycles">Motorcycles</option>
                            <option value="instruments">Musical Instruments</option>
                            <option value="photovideo">Photo+Video</option>
                            <option value="tools">Tools</option>
                            <option value="toys">Toys+Games</option>
                            <option value="trailers">Trailers</option>
                            <option value="videogames">Video Games/Consoles</option>
                        </select>
                        <label className="mt-3">$ </label>
                        <input className="mt-3 pl-1 -ml-1 outline-none w-16 text-gray-700 border-solid border-b-2 rounded focus:border-gray-600" type="text" placeholder="Price"></input><span className="text-gray-700">/</span>
                            <select className="text-gray-700">
                                <option value="day">day</option>
                                <option value="day">week</option>
                                <option value="day">hour</option>
                                <option value="day">use</option>
                                <option value="day">month</option>
                            </select>
                        <br/>
                        <input className="mt-3 pl-1 outline-none w-full text-gray-700 border-solid border-b-2 rounded focus:border-gray-600" type="text" placeholder="Image URL"></input>
                        <textarea className="border-solid border-2 rounded outline-none mt-3 w-full h-64 border-solid border-b-2 rounded focus:border-gray-600" placeholder="Description of Rental"></textarea>
                        <button className="p-3 float-right w-32 relative bg-gray-700 rounded text-white ">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}