import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {

    // Store all listings
    const modalActive = ref(false)

    // Store id of listing that is about to be deleted
    const toDeleteListingId = ref(null)

    return { 
        modalActive,
        toDeleteListingId
    }
})
