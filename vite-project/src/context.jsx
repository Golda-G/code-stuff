import React from 'react'


const AppContext = React.createContext();




const AppProvider = ({ children }) => {
    return  <AppContext.Provider value={{name:'john', age: 12}}>
        {children}
    </AppContext.Provider>
}

export { AppContext, AppProvider }