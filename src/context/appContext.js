import { createContext, useState } from "react";

export const appContext = createContext(null);

function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    return <appContext.Provider value={{loading,setLoading,isOpen,setIsOpen}}>
        {children}
    </appContext.Provider>
}

export default AppContextProvider;