import { ref } from 'vue'
import { defineStore } from 'pinia'
import getHouseListings from '../composables/getHouseListings'

export const useListingsStore = defineStore('listings', () => {
    const listings = ref([])
  
    const fetchListings = async () => {
        const { documents } = await getHouseListings()
        listings.value = documents.value
        // console.log(listings.value)
    }

    return { 
        listings,
        fetchListings
    }
})
