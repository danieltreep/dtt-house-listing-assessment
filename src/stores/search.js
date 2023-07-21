import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useListingsStore } from './listings'

export const useSearchStore = defineStore('search', () => {

    // Destructure the listings from the listings store
    const { listings } = storeToRefs(useListingsStore())

    // Store the search term that can be updated. 
    const searchTerm = ref('')
  
    // Filter the listings with the search term. It is possible to search for city and street name
    const matchingResults = computed(() => {
        return listings.value.filter(listing => {
            return (
                listing.location.city.toUpperCase().includes(searchTerm.value.toUpperCase()) ||
                listing.location.street.toUpperCase().includes(searchTerm.value.toUpperCase())
            )
        })
    })

    return { 
        searchTerm,
        matchingResults
    }
})
