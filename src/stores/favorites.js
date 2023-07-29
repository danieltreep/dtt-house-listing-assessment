import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {

    // Store all listings
    const favorites = ref([])

    const getFavoritesFromStorage = () => {
        if (localStorage.getItem('favorites')) {
            favorites.value = JSON.parse(localStorage.getItem('favorites'))
        }
    }

    const addFavorite = (listing) => {

        // Save all ids of the favorites to check if they are already there
        const favoritesIds = favorites.value.map(listing => listing.id)

        // If the ID is not present, add to favorites
        if (!favoritesIds.includes(listing.id)) {    
            favorites.value.push(listing);
        }     

        // Save the array in local storage so it can be retrieved later
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    const deleteFavorite = (id) => {

        favorites.value = favorites.value.filter(listing => listing.id !== id)
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    // Compare id to all favorite id's from storage
    const checkIfFavorite = (id) => {
        getFavoritesFromStorage()
        const favoritesIds = favorites.value.map(listing => listing.id)

        if (favoritesIds.includes(id)) {
            return true
        } else {
            return false
        }
    }

    return { 
        favorites,
        getFavoritesFromStorage,
        addFavorite,
        deleteFavorite,
        checkIfFavorite
    }
})
