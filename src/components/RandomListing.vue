<template>
    <router-link :to="{name: 'SingleListing', params: {id: randomListingId}}" class="random">
        <img src="@/assets/icons/ic_random.png" @click="handleRandom">
    </router-link>
</template>

<script setup>
import { useListingsStore } from '@/stores/listings'
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue'

// Get all listings and save listing id's and random listing id
const { listings } = storeToRefs(useListingsStore())
const listingIds = ref(null)
const randomListingId = ref(2)         // Start with a number because of first render                

// Everytime listings are fetched, save an array of the id's
watchEffect(() => {
    listingIds.value = listings.value.map(listing => listing.id) 
})

// Create a random index from the amount of items in the array and save value at random index
const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * listingIds.value.length)
    randomListingId.value = listingIds.value[randomIndex]
};

</script>

<style lang="css" scoped>
img {
    height: 22px;
}

@media (min-width: 768px) {
    .random {
        margin-left: auto;
    }
    img {
        height: 32px;
    }
}
</style>