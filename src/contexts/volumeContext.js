import React, {createContext, useState} from "react"

export const VolumeContext = createContext()
export const VolumeContextProvider = ({children}) => {
    const [volume, setVolume] = useState(true)
    const value = { volume, setVolume }
    return (
        <VolumeContext.Provider value={value}>
            {children}
        </VolumeContext.Provider>
    );
};
