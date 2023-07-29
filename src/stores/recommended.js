import { defineStore, storeToRefs } from "pinia";
import { useListingsStore } from "./listings";
import { useSingleListingStore } from './singleListing';
import { computed } from "vue";

export const useRecommendedStore = defineStore('recommended', () => {

    const { listings } = storeToRefs(useListingsStore())
    const { singleListing } = storeToRefs(useSingleListingStore())

    // Recommend a listing when the amount of bathrooms or bedrooms match the current listing and exclude current listing
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