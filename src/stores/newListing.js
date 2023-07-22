import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewListingStore = defineStore('newListing', () => {
    
    // Store the properties of the new listing
    const newListing = ref({
        createdAt: '',
        construstionYear: null,
        description: '',
        hasGarage: false,
        image: '',
        location: {
            city: '',
            zip: '',
            street: '',
            houseNumber: null,
            houseNumberAddition: null,  
        },
        madeByMe: true,
        price: null,
        rooms: {
            bathrooms: null,
            bedrooms: null
        },
        size: null
    })
  
    return { 
        newListing
    }
})
