import { ref } from 'vue'
import { defineStore } from 'pinia'
import getHouseListings from '../composables/getHouseListings'

export const useListingsStore = defineStore('listings', () => {

    // Store all listings
    const listings = ref([])
  
    // Fetch all listings and update the listings ref. Immediately sort the listings on price
    const fetchListings = async () => {
        const { documents } = await getHouseListings()
        listings.value = documents.value
        sortListings('price')
    }

    // Sort the listings based on criteria
    const sortListings = (criteria) => {
        
        if (criteria === 'price') {
            listings.value = listings.value.sort((a, b) => a.price - b.price)
        } else if (criteria === 'size') {
            listings.value = listings.value.sort((a, b) => a.size - b.size)
        }
    }

    const deleteListingStore = (id) => {
        listings.value = listings.value.filter(listing => listing.id !== id)
    }

    return { 
        listings,
        fetchListings,
        sortListings,
        deleteListingStore
    }
})
