import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function Post () {
    const [formValues, changeValues] = useState({})   

    const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('city_location'), {
        types: ['(cities)'],
        componentRestrictions: {country: "us"}
    })
    autocomplete.addListener("place_changed", handlePlaceSelect)

    function handlePlaceSelect() {
        let addressObject = autocomplete.getPlace()
        console.log("form values: ", formValues)
        changeValues({
            ...formValues,
            city_location: addressObject.address_components[0].long_name,
            state_location: addressObject.address_components[2].long_name,
            lat:addressObject.geometry.location.lat(),
            lng:addressObject.geometry.location.lng()
        })
        console.log(addressObject)
      }

    
    const onChange = (e) => {
        changeValues({
            ...formValues,
            [e.target.name]:e.target.value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formValues.item || !formValues.category || !formValues.price || !formValues.unit || !formValues.description || !formValues.url){
            return changeValues({
                ...formValues, 
                error:"One or more of the above fields has not been filled out"})
        }
        
        Axios.post("/api/post", formValues)
        .then(res => {
            window.location.replace('/')
        })
        .catch(err => {
            throw err
        })
    }



    return (
        <div className="bg-gray-300 h-screen bg-fixed overflow-auto">
            <Navbar />
            <div className="grid grid-cols-1 justify-items-center">
                <h3 className="mt-20 text-gray-800 font-bold">Lend an Item</h3>
                <div className="p-3 bg-white mx-4 mt-4 w-11/12 lg:w-9/12 xl:w-1/2 rounded-md">
                    <form className="relative" >
                        <input type="text" name="item" maxLength="100" onChange={onChange} required placeholder="Item" value={formValues.item} className="text-gray-700 pl-1 w-1/2 font-sm outline-none border-solid border-b-2 rounded focus:border-gray-600"></input>
                        <select name="category" onChange={onChange} className="flex mt-3 font-sm -ml-1 text-gray-700 outline-none" placeholder="Category">
                            <option value="" className="text-gray-500" selected disabled hidden>Category</option>
                            <option value="general">General</option>
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
                        <input name="price" type="number" onChange={onChange} maxLength="9" className="mt-3 pl-1 -ml-1 outline-none w-16 text-gray-700 border-solid border-b-2 rounded focus:border-gray-600" placeholder="Price"></input><span className="text-gray-700">  /</span>
                            <select name="unit" onChange={onChange} className="text-gray-700">
                                <option value="" selected disabled hidden>select unit</option>
                                <option value="day">day</option>
                                <option value="week">week</option>
                                <option value="hour">hour</option>
                                <option value="use">use</option>
                                <option value="month">month</option>
                            </select>
                        {/* <span>{formValues.price.match(/[]/)}</span> */}
                        <br/>
                        <input id="city_location" onChange={onChange} name="city_location" className="mt-3 pl-1 outline-none w-full text-gray-700 border-solid border-b-2 rounded focus:border-gray-600" type="text" placeholder="Location"></input>
                        <input name="url" onChange={onChange} className="mt-3 pl-1 outline-none w-full text-gray-700 border-solid border-b-2 rounded focus:border-gray-600" type="text" placeholder="Image URL"></input>
                        <textarea name="description" onChange={onChange} className="border-solid border-2 rounded outline-none mt-3 w-full h-64 border-solid border-b-2 rounded focus:border-gray-600" placeholder="Description of Rental"></textarea>
                            {formValues.error ? <span className="text-red-800 font-light text-sm">*{formValues.error}</span> : null}
                        <input type="submit" onClick={handleSubmit} className="p-3 float-right w-32 focus:outline-none active:bg-gray-600 relative bg-gray-700 rounded  text-white "/>
                    </form>
                </div>
            </div>
        {console.log(formValues)}
        </div>
    )
}