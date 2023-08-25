import axios from "axios";
import { createContext } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {
    // category values ['all', 'fish', 'insects', 'sea-creatures']
    const getData = async (category) => {
        try {
            const res = await axios.get(`https://critterpedia-backend-teal.vercel.app/${category}`)
            return res.data
        } catch (error) {
            console.error('app_context.js: Tried to get data', error)
            return [] // return an empty array if the axios fails
        }
    }
    return (
        <AppContext.Provider value={{getData}}>
            {/* Passes down the value to all children of the provider */}
            {props.children}
        </AppContext.Provider>
    );
};

// 5. export our context provider
export default AppContextProvider;
