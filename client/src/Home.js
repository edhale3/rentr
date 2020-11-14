import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function Home (props){
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        axios.get("/api/posts")
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            throw err
        })
    },[])

    function renderCards (){
        return posts.map(item => {
            return (
            <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-2 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline">{item.post_title}</a>
                <p className="absolute pr-2 right-0">${item.post_price}/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src={item.image_url}/>
            </div>
            )
        })
    }

    return (
        <div className="bg-gray-300 h-full absolute bg-fixed overflow-auto" >
            < Navbar history={props.history}/>
            <div className="mt-16 bg-orange-100 h-12 w-full" >
                <input type="submit" value="Search" className="bg-gray-500 rounded p-1 my-2 mr-2 float-right outline-none"></input>
                <input type="search" className="bg-gray-200 rounded p-1 my-2 mr-2 float-right outline-none" placeholder="search..."/>
            </div>
            <div className="flex">
                <div className="hidden sm:block w-0 sm:w-3/12 lg:w-1/6 p-2 bg-orange-100 h-full overflow-hidden">
                    <label className="text-gray-700 ml-1">Price</label><br/>
                    <input type="range" className="bg-black ml-1" />
                    <br/>
                    <label className="text-gray-700 ml-1 my-2">Unit</label><br/>
                    <select className="text-gray-700 my-2">
                        <option value="all" selected disabled hidden>All</option>
                        <option value="day" >Day</option>
                        <option value="hour" >Hour</option>
                        <option value="week" >Week</option>
                        <option value="month" >Month</option>
                        <option value="use" >Use</option>
                    </select>
                    <br/>
                    <label className="text-gray-700 ml-1">Location</label><br/>
                    <input type="search" className="bg-gray-200 rounded p-1 my-2 mr-2 w-full outline-none" placeholder="location..."/>
                </div>
                <div className="w-full z-0 sm:w-9/12 lg:w-5/6 relative text-gray-700 z-0 font-light grid p-2 pt-2 sm:px-12 md:px-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                    {posts ? renderCards() : "Welcome to rentR"}
                </div>
            </div>
        </div>
    )
}



                {/* <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Gaspowered Lawnmower </a>
                <p className="absolute pr-2 right-0">$10/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Chainsaw </a>
                <p className="absolute pr-2 right-0">$15/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">Fallbrook, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1556912743-54b370e8385b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Gaspowered Lawnmower </a>
                <p className="absolute pr-2 right-0">$10/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Gaspowered Lawnmower </a>
                <p className="absolute pr-2 right-0">$10/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Gaspowered Lawnmower </a>
                <p className="absolute pr-2 right-0">$10/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Chainsaw </a>
                <p className="absolute pr-2 right-0">$15/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">Fallbrook, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1556912743-54b370e8385b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Gaspowered Lawnmower </a>
                <p className="absolute pr-2 right-0">$10/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'/>
                </div>
                <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline"> Gaspowered Lawnmower </a>
                <p className="absolute pr-2 right-0">$10/day</p>
                <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">San Diego, CA</p>
                <img className="pt-16 rounded" src='https://images.unsplash.com/photo-1590820292118-e256c3ac2676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'/>
                </div> */}