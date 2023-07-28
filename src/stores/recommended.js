import { defineStore, storeToRefs } from "pinia";
import { useListingsStore } from "./listings";
import { useSingleListingStore } from './singleListing';
import { computed } from "vue";

export const useRecommendedStore = defineStore('recommended', () => {

    const { listings } = storeToRefs(useListingsStore())
    const { singleListing } = storeToRefs(useSingleListingStore())

    const recommendedListings = computed(() => {

        return listings.value.filter(listing => {
            return (
                listing.rooms.bedrooms === singleListing.value.rooms.bedrooms ||
                listing.rooms.bathrooms === singleListing.value.rooms.bathrooms ||
                listing.price <= singleListing.price
            )
        })
    })

    return {
        recommendedListings
    }
})