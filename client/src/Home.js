import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function Home (props){
    const [posts, setPosts] = useState(null)
    const [filters, setFilters] = useState({})
    const [filterToggle, changePosts] = useState(false)

    useEffect(() => {
        axios.get(`/api/posts`, {
            params: {
                price: filters.price,
                radius:filters.radius,
                city:filters.city_filter,
                unit:filters.unit,
                state:filters.state_filter,
                lat:filters.lat,
                lng:filters.lng
            }
        })
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            throw err
        })
    },[filterToggle])

    const submitFilters = () => {
        changePosts(true)
        setTimeout(()=> {
            changePosts(false)
        }, 5)
    }
    const onChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
       })
    }


    function renderCards (){
        return posts.map(item => {
            console.log(item)
            return (
            <div className = "relative rounded px-2 py-2 bg-white w-11/12 h-auto m-2 hover:shadow-xl transition duration-1000 ease-in-out transform hover:scale-105 font-light overflow-hidden">
                <a href="" className="absolute pl-2 left-0 hover:underline">{item.post_title}</a>
                <p className="absolute pr-2 right-0">${item.post_price}/{item.unit_of_rental}</p>
            <p className="absolute pt-6 pl-2 left-0 text-gray-800 font-light">{item.city_location}, {item.state_location}</p>
                <img className="pt-16 rounded" src={item.image_url}/>
            </div>
            )
        })
    }

    
    const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
        types: ['(cities)'],
        componentRestrictions: {country: "us"}
    })

    autocomplete.addListener("place_changed", handlePlaceSelect)

    function handlePlaceSelect() {
        let addressObject = autocomplete.getPlace()
        setFilters({
            ...filters,
            city_filter: addressObject.address_components[0].long_name,
            state_filter: addressObject.address_components[2].long_name,
            lat:addressObject.geometry.location.lat(),
            lng:addressObject.geometry.location.lng()
        })
      }

    return (
        
        <div className="bg-gray-300 h-full w-full absolute bg-fixed overflow-auto" >
            < Navbar history={props.history}/>
            <div className="mt-16 bg-orange-100 h-12 w-full" >
                <input type="submit" value="Search" className="bg-gray-500 text-white rounded p-1 my-2 mr-2 float-right outline-none"></input>
                <input type="search" className="bg-gray-200 rounded p-1 my-2 mr-2 float-right outline-none" placeholder="search..."/>
            </div>
            <div className="flex">
                <div onChange={onChange} className="hidden sm:block w-0 text-sm sm:w-3/12 lg:w-1/6 p-2 -mt-1 bg-orange-100 h-full rounded overflow-hidden">
                    <label className="text-gray-700 text-sm ml-1">Price</label><br/>
                    <input name="price" type="range" min=" " className="bg-black ml-1 ui-range-slider" />
                    <br/>
                    <label className="text-gray-700 ml-1 my-2">Unit</label><br/>
                    <select name="unit" className="text-gray-700 my-2">
                        <option value="all" selected >All</option>
                        <option value="day" >Day</option>
                        <option value="hour" >Hour</option>
                        <option value="week" >Week</option>
                        <option value="month" >Month</option>
                        <option value="use" >Use</option>
                    </select>
                    <br/>
                    <label className="text-gray-700 ml-1">Location</label><br/>
                    {/* <input type="search" className="bg-gray-200 rounded p-1 my-2 mr-2 w-full outline-none" placeholder="location..."/> */}
                    <input id="autocomplete" name="city_filter" type="search" className="bg-gray-200 rounded p-1 my-2 mr-2 w-full outline-none" placeholder="location..." />
                    <label className="text-gray-700 ml-1">Radius</label><br/>
                    <select name="radius" className="text-gray-700 my-2">
                        <option value={15} selected>15 Miles</option>
                        <option value={25} >25 Miles</option>
                        <option value={50} >50 Miles</option>
                        <option value={100} >100 Miles</option>
                        <option value={250} >250 Miles</option>
                    </select>
                <br/>
                <input type="submit" onClick={submitFilters} value="Filter" className="bg-gray-500 text-white rounded p-1 my-2 mr-2 float-right"></input>

                </div>

                <div className="w-full z-0 sm:w-9/12 lg:w-5/6 relative text-gray-700 z-0 font-light grid p-2 pt-2 sm:px-12 md:px-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                    {posts ? renderCards() : "Welcome to rentR"}
                </div>
            </div>
            {console.log(filters)}
        </div>
    )
}


