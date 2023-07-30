<template>
    <button @click="handleRandom" @keydown.enter="handleRandom" title="Show me a random house">
        <img src="@/assets/icons/ic_random.png" alt="Show me a random listing" >
    </button>
</template>

<script setup>
// External
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

// Stores
import { useListingsStore } from '@/stores/listings'

const { listings } = storeToRefs(useListingsStore())
const { fetchListings } = useListingsStore()

const allListingIds = ref(null)
const randomListingId = ref(2)         // Start with a number because of first render                
const router = useRouter()

// Everytime listings are fetched, save an array of the id's
watchEffect(() => {
    allListingIds.value = listings.value.map(listing => listing.id) 
})

// Create a random index from the amount of items in the array and save value at random index
const handleRandom = async () => {

    // Fetch listings if there are not yet there, for example when a single listing is the first loaded page
    if (!allListingIds.value.length) {
        await fetchListings()
    }

    const randomIndex = Math.floor(Math.random() * allListingIds.value.length)
    randomListingId.value = allListingIds.value[randomIndex]
    router.push({name: 'SingleListing', params: {id: randomListingId.value}})
};

</script>

<style lang="css" scoped>

img {
    height: 22px;
}
button {
    border: none;
    margin-left: .2rem;
    background-color: transparent;
    padding: 0;
}

@media (min-width: 768px) {
    img {
        height: 32px;
    }
    button {
        margin-left: auto;
    }
}
</style>