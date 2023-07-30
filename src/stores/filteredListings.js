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

    
    // FilterOptions
    const bedrooms = ref('')
    const bathrooms = ref('')
    const size = ref('')

    // Filter listings based on the filters
    const filteredResults = computed(() => {
        
        // Return all matching search results when there are no values from filters
        if (
            bathrooms.value === '' && 
            bedrooms.value === '' && 
            size.value === ''
        ) return matchingResults.value
        
        // Compare filters against values in matchingresults. Return true if it's a match or if filter is any
        return matchingResults.value.filter(listing => {
            return (
                (listing.rooms.bedrooms === +bedrooms.value || bedrooms.value === '') &&
                (listing.rooms.bathrooms === +bathrooms.value || bathrooms.value === '') &&
                (listing.size >= +size.value || size.value === '')
            )
        })
    })

    // Filter listings that match filters and are madebyme
    const listingsMadeByMe = computed(() => {
        return filteredResults.value.filter(listing => listing.madeByMe)
    })

    const resetFilters = () => {
        bedrooms.value = ''
        bathrooms.value = ''
        size.value = ''
    }

    return { 
        bedrooms,
        bathrooms,
        size,
        searchTerm,
        matchingResults,
        listingsMadeByMe,
        filteredResults,
        resetFilters
    }
})
