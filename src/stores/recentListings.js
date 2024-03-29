import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRecentListingsStore = defineStore('recentListings', () => {

    // Store all listings
    const recentListings = ref([])

    const getRecentListingsFromStorage = () => {
        if (localStorage.getItem('recentListings')) {
            recentListings.value = JSON.parse(localStorage.getItem('recentListings'))
        }
    }

    const addRecentListing = (listing) => {

        // Save all ids of the recent listing to check if they are already there
        const recentListingsIds = recentListings.value.map(listing => listing.id)

        // If the ID is not present, add as first in recentlistings. If present, put it at the start of the array
        if (!recentListingsIds.includes(listing.id)) {    

            recentListings.value.unshift(listing);

        } else if (recentListingsIds.includes(listing.id)) {

            const index = recentListingsIds.indexOf(listing.id)             // Get the index of the item already in the array
            recentListings.value.splice(index, 1)                           // Remove the item at index
            recentListings.value.unshift(listing)                           // Put the item at index 0 of the array
        }       

        // Save the array in local storage so it can be retrieved later
        localStorage.setItem('recentListings', JSON.stringify(recentListings.value))
    }

    const deleteRecentListing = (id) => {
        
        recentListings.value = recentListings.value.filter(listing => listing.id !== id)
        localStorage.setItem('recentListings', JSON.stringify(recentListings.value))
    }

    return { 
        recentListings,
        getRecentListingsFromStorage,
        addRecentListing,
        deleteRecentListing
    }
})
