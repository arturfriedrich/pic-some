import React, { createContext } from "react"

const { Provider } = createContext()

function ContextProvider({children}) {
    return (
        <Provider value="">
            {children}
        </Provider>
    )
}

export { ContextProvider, Provider }