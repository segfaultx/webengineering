import React, {createContext, useState} from "react"


export const VolumeContext = createContext()
/**
 * Volume context. Enables/Disables sound for upgrades, army and clicks, generators
 * @param children
 * @returns {*}
 * @constructor
 */
export const VolumeContextProvider = ({children}) => {
    const [volume, setVolume] = useState(true)
    const value = { volume, setVolume }
    return (
        <VolumeContext.Provider value={value}>
            {children}
        </VolumeContext.Provider>
    );
};
