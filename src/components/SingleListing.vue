<template>
    <section class="listing-section">
        <div class="listing-hero">
            <img class="hero-image" :src="selectedListing?.image" alt="">
            <BackButtonMobile color="white"/>
            <div class="listing-options-mobile">
                <button>
                    <img src="@/assets/icons/ic_edit_white@3x.png" alt="">
                </button>
                <button>
                    <img @click="modalActive = true" src="@/assets/icons/ic_delete_white@3x.png" alt="">
                </button>
            </div>
        </div>
        <div class="listing-information">
            <h1> {{ selectedListing?.location.street }} {{ selectedListing?.location.houseNumber }}</h1>

            <div class="listing-options-desktop">
                <button>
                    <img src="@/assets/icons/ic_edit@3x.png" alt="">
                </button>
                <button>
                    <img @click="modalActive = true" src="@/assets/icons/ic_delete@3x.png" alt="">
                </button>
            </div>

            <div class="listing-details">
                <img src="@/assets/icons/ic_location@3x.png">
                <p>{{ selectedListing?.location.zip }} {{ selectedListing?.location.city}}</p>
            
                <br>
            
                <img src="@/assets/icons/ic_price@3x.png">
                <p>{{ selectedListing?.price }}</p>
            
                <img src="@/assets/icons/ic_size@3x.png">
                <p>{{ selectedListing?.size }} m2</p>

                <img src="@/assets/icons/ic_construction_date@3x.png">
                <p>Built in {{ selectedListing?.constructionYear }}</p>

                <br>
            
                <img src="@/assets/icons/ic_bed@3x.png">
                <p>{{ selectedListing?.rooms.bedrooms }}</p>

                <img src="@/assets/icons/ic_bath@3x.png">
                <p>{{ selectedListing?.rooms.bathrooms }}</p>

                <img src="@/assets/icons/ic_garage@3x.png">
                <p>{{ selectedListing?.hasGarage ? 'Yes' : 'No' }}</p>
            </div>

            <p class="description">{{ selectedListing.description }}</p>
            <BaseModal v-if="modalActive" @delete="handleDelete" @close-modal="modalActive = false"/>
        </div>
    </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia'
import BackButtonMobile from '../components/navigation/BackButtonMobile.vue';
import BaseModal from '../components/BaseModal.vue';
// import getSelectedListing from '@/composables/getSelectedListing'

const modalActive = ref(false);

import { useSelectedListingStore } from '@/stores/selectedListing'
const { fetchSelectedListing } = useSelectedListingStore()
const { selectedListing } = storeToRefs(useSelectedListingStore())

const props = defineProps({
    id: String
})

// Fetch data in the store when the id in the URL changes and scroll to the top
watchEffect(async () => {
    await fetchSelectedListing(props.id)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

// Handle delete function that is fired from the modal
const handleDelete = () => {
    console.log('deleted')
};

</script>

<style lang="css" scoped>

.listing-hero {
    position: relative;
}
.hero-image {
    z-index: -1;
    width: 100%;
    filter: brightness(80%);
}
.listing-options-desktop {
    display: none;
}
.listing-options-mobile {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    gap: 1.5rem;
}
.listing-options-mobile img {
    height: 18px;
}

.listing-information {
    background-color: var(--background-color-2);
    padding: 1.5rem;
    border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
    translate: 0 -50px;
    margin-bottom: -50px;
}
.listing-information img {
    height: 14px;
    margin-right: .5rem;
}
.listing-details {
    margin-block: .5rem;
}
.listing-details p {
    line-height: 2rem;
    display: inline; 
    margin-right: 1.5rem;
    font-weight: 600;
    color: var(--text-color-secondary);
}
.description {
    color: var(--text-color-secondary);
    line-height: 1.5;
}

button {
    background-color: transparent;
    border: none;
}

@media (min-width: 1024px) {
    .listing-information {
        background-color: var(--background-color-2);
        padding: 1.5rem;
        border-radius: 0;
        translate: 0;
        margin-bottom: 0;
    }
    .listing-options-desktop {
        display: flex;
        position: absolute;
        top: 2rem;
        right: 2rem;
        gap: 1rem;
    }       
    .listing-options-desktop img {
        height: 18px;
    }
    .listing-options-mobile {
        display: none;
    }
}
</style>