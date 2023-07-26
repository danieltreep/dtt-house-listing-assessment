import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useListingsStore } from './listings'

export const useFilteredListingsStore = defineStore('filteredListings', () => {

    // Get the listings from the listings store
    const { listings } = storeToRefs(useListingsStore())

    // Store the search term 
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

    // Filter listings that match search term and are madebyme
    const listingsMadeByMe = computed(() => {
        return listings.value.filter(listing => {
            if (listing.madeByMe) {
                return (
                    listing.location.city.toUpperCase().includes(searchTerm.value.toUpperCase()) ||
                    listing.location.street.toUpperCase().includes(searchTerm.value.toUpperCase())
                )
            }
        })
    })

    return { 
        searchTerm,
        matchingResults,
        listingsMadeByMe
    }
})