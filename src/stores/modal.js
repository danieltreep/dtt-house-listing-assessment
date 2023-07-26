import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {

    // Store all listings
    const modalActive = ref(false)

    const toDeleteListingId = ref(null)

    return { 
        modalActive,
        toDeleteListingId
    }
})
