import React, { createContext, useState, useEffect } from "react"

const Context = createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

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

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    console.log(cartItems)

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }