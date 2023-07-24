import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewListingStore = defineStore('newListing', () => {
    
    // Store the properties of the new listing
    const newListing = ref({
        createdAt: '',
        constructionYear: null,
        description: '',
        hasGarage: 'select',
        image: '',
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
        size: null,
        file: null
    })
  
    const resetNewListing = () => {
        newListing.value = {
            createdAt: '',
            constructionYear: null,
            description: '',
            hasGarage: 'select',
            image: '',
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
            size: null,
            file: null
        }
    }
    return { 
        newListing,
        resetNewListing
    }
})
