import { defineStore, storeToRefs } from "pinia";
import { useListingsStore } from "./listings";
import { useSingleListingStore } from './singleListing';
import { computed } from "vue";

export const useRecommendedStore = defineStore('recommended', () => {

    const { listings } = storeToRefs(useListingsStore())
    const { singleListing } = storeToRefs(useSingleListingStore())

    const recommendedListings = computed(() => {

        return listings.value.filter(listing => {
            if (listing.id !== singleListing.value.id) {
                return (
                    listing.rooms.bathrooms === singleListing.value.rooms.bathrooms ||
                    listing.rooms.bedrooms === singleListing.value.rooms.bedrooms
                )
            }
        })
    })

    return {
        recommendedListings
    }
})