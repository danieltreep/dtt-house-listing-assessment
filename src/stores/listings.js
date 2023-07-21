import { ref } from 'vue'
import { defineStore } from 'pinia'
import getHouseListings from '../composables/getHouseListings'

export const useListingsStore = defineStore('listings', () => {
    const listings = ref([])
  
    const fetchListings = async () => {
        const { documents } = await getHouseListings()
        listings.value = documents.value
        sortListings('price')
    }

    const sortListings = (criteria) => {
        
        if (criteria === 'price') {
            listings.value = listings.value.sort((a, b) => {
                return a.price - b.price
            })
        } else if (criteria === 'size') {
            listings.value = listings.value.sort((a, b) => {
                return a.size - b.size
            })
        }
    }

    return { 
        listings,
        fetchListings,
        sortListings
    }
})
