import { ref } from 'vue'
import { defineStore } from 'pinia'
import getSelectedListing from '../composables/getSelectedListing'

export const useSelectedListingStore = defineStore('selectedListing', () => {
    
    // Store the selected listing so it can be edited
    const selectedListing = ref(null)
  
    const fetchSelectedListing = async (id) => {
        const { document } = await getSelectedListing(id)
        selectedListing.value = document.value[0]
    }

    return { 
        selectedListing,
        fetchSelectedListing
    }
})
