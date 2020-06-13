import React, {createContext, useState} from "react"

export const ClickContext = createContext()
export const ClickContextProvider = ({children}) => {
    const [clicks, setClicks] = useState(0)
    const value = { clicks, setClicks }
    return (
        <ClickContext.Provider value={value}>
            {children}
        </ClickContext.Provider>
    );
};
