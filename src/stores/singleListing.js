import { ref } from 'vue'
import { defineStore } from 'pinia'
import getSingleListing from '../composables/getSingleListing'

// Every time a single list is necessary, this store will be updated
export const useSingleListingStore = defineStore('singleListing', () => {
    
    // Store the properties of the single listing
    const singleListing = ref({
        createdAt: '',
        constructionYear: null,
        description: '',
        hasGarage: 'select',
        image: null,
        location: {
            city: '',
            zip: '',
            street: '',
            houseNumber: null,
            houseNumberAddition: '',  
        },
        madeByMe: true,
        price: null,
        rooms: {
            bathrooms: null,
            bedrooms: null
        },
        size: null
    })
  
    // Fetch a single listing and update the single listing ref
    const fetchSingleListing = async (id) => {
        const { document } = await getSingleListing(id)
        singleListing.value = document.value[0]
    }

    // Reset singleListing to original state
    const resetSingleListing = () => {
        singleListing.value = {
            createdAt: '',
            constructionYear: null,
            description: '',
            hasGarage: 'select',
            image: null,
            location: {
                city: '',
                zip: '',
                street: '',
                houseNumber: null,
                houseNumberAddition: '',  
            },
            madeByMe: true,
            price: null,
            rooms: {
                bathrooms: null,
                bedrooms: null
            },
            size: null
        }
    }
    
    return { 
        singleListing,
        fetchSingleListing,
        resetSingleListing
    }
})
