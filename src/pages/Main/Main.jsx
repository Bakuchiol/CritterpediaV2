import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/app_context'
import Search from '../../components/Search/Search'
import Grid from '../../components/Grid/Grid'
import Categories from '../../components/Categories/Categories'
import axios from 'axios'

function Main() {
    // const {getData} = useContext(AppContext)
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState('all')
    const [data,setData] = useState([])

    // TODO: LYNETTE use this function in the Gallery Page
    const getData = async (category) => {
        try {
            const res = await axios.get(`https://critterpedia-backend-teal.vercel.app/${category}`)
            // return res.data
            setData(res.data)
        } catch (error) {
            console.error('app_context.js: Tried to get data', error)
            return [] // return an empty array if the axios fails
        }
    }

    //useEffect#1
    useEffect(() => {
        try {
            // setData(getData(category))
            getData(category)
        } catch (error) {
            console.error("Main.jsx: (useEffect#1) Couldn't load grid data")
        }

    },[category])

    //useEffect#2
    useEffect(() => {
        try {
            // if (searchTerm === "") {
            //     getData(category)
            //     return
            // }

            if (!data.length) {
                console.log('nothing to filter')
                return
            } else console.log('something to filter', searchTerm)

            let filteredData = data.filter((critter) => critter.Name.toLowerCase().includes(searchTerm))
            setData(filteredData)
        } catch (err) {
            console.error("Main.jsx: (useEffect#2) Couldn't filter data using searchTerm", err)
        }
    },[searchTerm])

    return (
        <div className="main">
            <Search setSearchTerm={setSearchTerm} getData={getData} category={category} />
            <Categories setCategory={setCategory} />
            <Grid data={data} />
        </div>
    )
}

export default Main