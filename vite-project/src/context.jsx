/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'

const AppContext = React.createContext();


const allMealsUrl = 'https://themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealsUrl = 'https://themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
const [meals, setMeals] = useState([])

    const fetchMeals = async (url) =>{
        try {
            const { data } = await axios(url)
            setMeals(data.meals)
            
            
        } catch (error) {
            console.log(error.response)

        }
    };

    useEffect(()=>{
        
        fetchMeals(allMealsUrl)
    },[])

    



    return  <AppContext.Provider value={{meals}}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
    


export { AppContext, AppProvider }