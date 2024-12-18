import React, {createContext} from "react";
import {data_allproducts} from "./Allproducts"


 export const ShopContext = createContext(null);

 const ShopContextProvider = (props)  =>{
    const contextValue = {data_allproducts}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    
 }

 export default ShopContextProvider;