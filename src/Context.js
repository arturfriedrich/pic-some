import React, { createContext, useState } from "react"

const { Provider } = createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])

    return (
        <Provider value={{allPhotos}}>
            {children}
        </Provider>
    )
}

export { ContextProvider, Provider }