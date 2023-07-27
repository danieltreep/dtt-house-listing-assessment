<template>
    <section class="listing-section">

        <div class="listing-hero">
            <!-- <img class="hero-image" v-if="!singleListing?.image" src="@/assets/images/img_empty_houses@3x.png" alt="There is no image" > -->
            <img class="hero-image" :src="singleListing?.image" alt="">

            <BackButtonMobile color="white"/>

            <div class="listing-options-mobile" v-if="singleListing?.madeByMe">
                
                <button @click="router.push({name: 'EditListing'})">
                    <img src="@/assets/icons/ic_edit_white@3x.png" alt="Edit this listing">
                </button>

                <button @click="handleDelete" >
                    <img src="@/assets/icons/ic_delete_white@3x.png" alt="Delete this listing">
                </button>
            </div>
        </div>
        <!-- /  The top of the listing with the image and the options for mobile-->

        <div class="listing-information">
            <h1> {{ singleListing?.location.street }} {{ singleListing?.location.houseNumber }} {{ singleListing?.location.houseNumberAddition }}</h1>

            <div class="listing-options-desktop" v-if="singleListing?.madeByMe">
                <button @click="router.push({name: 'EditListing'})">
                    <img src="@/assets/icons/ic_edit@3x.png" alt="Edit this listing">
                </button>

                <button @click="handleDelete">
                    <img  src="@/assets/icons/ic_delete@3x.png" alt="Delete this listing">
                </button>
            </div>

            <button class="favorite" @click="handleFavorite">
                    <img v-if="isFavorite" src="@/assets/icons/ic_favorite@3x.png" alt="">
                    <img v-if="!isFavorite" src="@/assets/icons/ic_favorite_empty@3x.png" alt="Edit this listing">
            </button>
            <!-- / Listing options for desktop -->

            <div class="listing-details">
                <img src="@/assets/icons/ic_location@3x.png">
                <p>{{ singleListing?.location.zip }} {{ singleListing?.location.city}}</p>
            
                <br>
            
                <img src="@/assets/icons/ic_price@3x.png">
                <p>{{ singleListing?.price ? numberWithCommas(singleListing.price) : null }}</p>
            
                <img src="@/assets/icons/ic_size@3x.png">
                <p>{{ singleListing?.size }} m2</p>

                <img src="@/assets/icons/ic_construction_date@3x.png">
                <p>Built in {{ singleListing?.constructionYear }}</p>

                <br>
            
                <img src="@/assets/icons/ic_bed@3x.png">
                <p>{{ singleListing?.rooms.bedrooms }}</p>

                <img src="@/assets/icons/ic_bath@3x.png">
                <p>{{ singleListing?.rooms.bathrooms }}</p>

                <img src="@/assets/icons/ic_garage@3x.png">
                <p>{{ singleListing?.hasGarage ? 'Yes' : 'No' }}</p>
            </div>
            <!-- / Listing details -->

            <p class="description">{{ singleListing?.description }}</p>

            <BaseModal />
        </div>
    </section>
</template>

<script setup>
// External
import { onMounted, ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// Components
import BackButtonMobile from '@/components/navigation/BackButtonMobile.vue';
import BaseModal from '@/components/BaseModal.vue';

// Stores
import { useSingleListingStore } from '@/stores/singleListing'
import { useRecentListingsStore } from '@/stores/recentListings'
import { useModalStore } from '@/stores/modal'
import { useFavoritesStore } from '@/stores/favorites';

const { modalActive, toDeleteListingId } = storeToRefs(useModalStore())
const { fetchSingleListing } = useSingleListingStore()
const { singleListing } = storeToRefs(useSingleListingStore())
const { addRecentListing } = useRecentListingsStore()
const { addFavorite, deleteFavorite, checkIfFavorite } = useFavoritesStore()

const router = useRouter()
const isFavorite = ref(checkIfFavorite(props.id));
const props = defineProps({
    id: String
})

await fetchSingleListing(props.id)

// Fetch data when id in the URL changes. Scroll to the top for mobile and push to recently viewed
watchEffect(async () => {
    await fetchSingleListing(props.id)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    addRecentListing(singleListing.value)
});

// Handle delete function that is emitted from the modal
const handleDelete = () => {
    modalActive.value = true
    toDeleteListingId.value = Number(props.id)
};

const handleFavorite = () => {
    
    if (isFavorite.value) {
        deleteFavorite(singleListing.value.id)
        isFavorite.value = false
    } else {
        addFavorite(singleListing.value)
        isFavorite.value = true
    }
}
onMounted(() => {
    if (checkIfFavorite(Number(props.id))) {
        isFavorite.value = true
    }
})

// Function that adds dots to a number
// Credit to: https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
</script>

<style lang="css" scoped>
.listing-hero {
    position: relative;
}
.hero-image {
    z-index: -1;
    width: 100%;
    filter: brightness(80%);
    max-height: 600px;
    object-fit: cover;
    object-position: top;
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
    translate: 0 -25px;
    margin-bottom: -25px;
}
.listing-information img {
    height: 14px;
    margin-right: .5rem;
}
.favorite {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
}
.favorite img {
    height: 18px;
    margin: 0 auto;
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

@media (min-width: 768px) {
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
        right: 4rem;
        gap: .5rem;
    }       
    .listing-options-desktop img {
        height: 18px;
    }
    .listing-options-mobile {
        display: none;
    }
    .listing-details p {
        font-size: 16px;
    }
    .favorite {
        top: 2rem;
        right: 1.5rem;
    }
    .favorite img {
        height: 18px;
    }
}
</style>