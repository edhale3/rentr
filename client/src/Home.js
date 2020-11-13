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
            <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-4 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
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
            <div className="relative text-gray-700 z-0 font-light grid p-2 pt-16 sm:px-24 md:px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {posts ? renderCards() : "Welcome to rentR"}
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