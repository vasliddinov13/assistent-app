import { createContext, useState } from "react";

export const appContext = createContext(null);

function AppContextProvider({children}){
    const [isOpen,setIsOpen] = useState(false);
    return <appContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </appContext.Provider>
}

export default AppContextProvider;