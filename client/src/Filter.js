import { func } from 'prop-types'
import React, {useState} from 'react'

export default function Filter(){
    const [filters, setFilters] = useState({})
    const [filterToggle, changePosts] = useState(false)

    const submitFilters = () => {
        changePosts(true)
        setTimeout(()=> {
            changePosts(false)
        }, 50)
    }
    const onChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
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
        <div>
            <div className="mt-16 bg-orange-100 h-12 w-full" >
            <input type="submit" value="Search" className="bg-gray-500 text-white rounded p-1 my-2 mr-2 float-right outline-none"></input>
            <input type="search" className="bg-gray-200 rounded p-1 my-2 mr-2 float-right outline-none" placeholder="search..."/>
            </div>
            <div className="flex">
                <div onChange={onChange} className="hidden sm:block w-0 text-sm sm:w-3/12 lg:w-1/6 p-2 -mt-1 bg-orange-100 h-full rounded overflow-hidden">
                    <label className="text-gray-700 text-sm ml-1">Price</label><br/>
                    <input name="price" type="range" className="bg-black ml-1 ui-range-slider" />
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
                        <option selected disabled>Select Radius</option>
                        <option value={15} >15 Miles</option>
                        <option value={25} >25 Miles</option>
                        <option value={50} >50 Miles</option>
                        <option value={100} >100 Miles</option>
                        <option value={250} >250 Miles</option>
                    </select>
                    <br/>
                    <input type="submit" onClick={submitFilters} value="Filter" className="bg-gray-500 text-white rounded p-1 my-2 mr-2 float-right"></input>
                </div>
            </div>
        </div>
    )
}