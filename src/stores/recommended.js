import { defineStore } from "pinia";
import { useListingsStore } from "./listings";
import { useSingleListingStore } from './singleListing';
import { computed } from "vue";

export const useRecommendedStore = defineStore('recommended', () => {

    const { listings } = useListingsStore()
    const { singleListing } = useSingleListingStore()

    const recommendedListings = computed(() => {
        return listings
    })

    return {
        recommendedListings
    }
})