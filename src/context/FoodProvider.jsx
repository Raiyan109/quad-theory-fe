import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Food_Context = createContext()

// eslint-disable-next-line react/prop-types
const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        const fetchFoods = async () => {
            const { data } = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            console.log(data);
            setFoods(data.Items)
        }
        fetchFoods()
    }, [])
    const value = {
        foods,
        setFoods
    }
    console.log(value);
    return (
        <Food_Context.Provider value={value}>
            {children}
        </Food_Context.Provider>
    )
}

export default FoodProvider