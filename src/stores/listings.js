import { ref } from 'vue'
import { defineStore } from 'pinia'
import getListings from '@/composables/getListings'

export const useListingsStore = defineStore('listings', () => {

    // Store all listings
    const listings = ref([])
  
    // Fetch all listings and update the listings ref. Immediately sort the listings on price
    const fetchListings = async () => {
        const { documents } = await getListings()
        listings.value = documents.value
        sortListings('price')
    }

    // Sort the listings based on criteria
    const sortListings = (criteria) => {
        
        if (criteria === 'price') {
            listings.value = listings.value.sort((a, b) => a.price - b.price)
        } else if (criteria === 'size') {
            listings.value = listings.value.sort((a, b) => b.size - a.size)
        } else if (criteria === 'year') {
            listings.value = listings.value.sort((a, b) => b.constructionYear - a.constructionYear)
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
