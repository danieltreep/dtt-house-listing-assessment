import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { useSingleListingStore } from './singleListing'

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

        // If the ID is not present, add as first in thelist to recentlistings. If present, put it at the start of the array
        if (!recentListingsIds.includes(listing.id)) {    

            recentListings.value.unshift(listing);

        } else if (recentListingsIds.includes(listing.id)) {

            const index = recentListingsIds.indexOf(listing.id)             // Get the index of the item already in the array
            recentListings.value.splice(index, 1)                           // Remove the item at index
            recentListings.value.unshift(listing)                           // Put the item at index 0 of the array
        }       

        // Remove the last item to keep the list short
        if (recentListings.value.length === 4) {
            recentListings.value.pop()
        }

        // Save the array in local storage so it can be retrieved later
        localStorage.setItem('recentListings', JSON.stringify(recentListings.value))
    }

    return { 
        recentListings,
        getRecentListingsFromStorage,
        addRecentListing,
    }
})
