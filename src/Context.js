import React, { createContext, useState, useEffect } from "react"

const Context = createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(photo.id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArray)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }