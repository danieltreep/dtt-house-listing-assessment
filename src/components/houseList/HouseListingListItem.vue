<template>
    
    
    <li class="list-item" tabindex="0" @click="router.push({name: 'SingleListing', params: {id: listing.id}})">
        <img class="listing-thumbnail" :src="listing.image" alt="listing ...">

        <div class="listing-information">
            <h2 class="title">{{ listing.location.street }} {{ listing.location.houseNumber }} {{ listing.location?.houseNumberAddition }}</h2>
            <p class="price">&euro; {{ numberWithCommas(listing.price) }}</p>
            <p class="adress">{{ listing.location.zip }} {{ listing.location.city }}</p>
            <!-- / Location details of listing-->

            <div class="listing-details">
                <img src="@/assets/icons/ic_bed@3x.png">
                <p>{{ listing.rooms.bedrooms }}</p>
                <img src="@/assets/icons/ic_bath@3x.png">
                <p>{{ listing.rooms.bathrooms }}</p>
                <img src="@/assets/icons/ic_size@3x.png">
                <p>{{ listing.size }} m2</p>
            </div>
            <!-- / Three details of the listing -->

            <div class="listing-options" v-if="listing.madeByMe">
                <button @click.stop.prevent="handleEdit">
                    <img src="@/assets/icons/ic_edit@3x.png">
                </button>
                <button>
                    <img @click.stop.prevent="handleDelete" src="@/assets/icons/ic_delete@3x.png" alt="">
                </button>
            </div>
            <!-- / Additional listing options if the user owns the listing -->
        </div>

        <div class="favorite" v-if="isFavorite">
            <img src="@/assets/icons/ic_favorite_white@3x.png">
        </div>
        <!-- / Favorite indicator -->
    </li>
    
</template>

<script setup>
// External
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

// Stores
import { useSingleListingStore } from '@/stores/singleListing'
import { useModalStore } from '@/stores/modal'
import { ref } from 'vue';
import { useFavoritesStore } from '@/stores/favorites';

const {  checkIfFavorite } = useFavoritesStore()
const props = defineProps({
    listing: Object
});

const router = useRouter();
const isFavorite = ref(checkIfFavorite(props.listing.id))
const { modalActive, toDeleteListingId } = storeToRefs(useModalStore())
const { fetchSingleListing } = useSingleListingStore()

// Function that adds dots to a number
// Credit to: https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const handleDelete = () => {
    modalActive.value = true,
    toDeleteListingId.value = props.listing.id
}

// First fetch the selected listing and then push to the edit page
const handleEdit = async () => {
    await fetchSingleListing(props.listing.id)
    router.push({name: 'EditListing', params: {id: props.listing.id}})
};

</script>

<style lang="css" scoped>
.list-item {
    background-color: var(--background-color-2);
    padding: .7rem;
    margin-bottom: 1rem;
    border-radius: var(--border-radius-s);
    display: grid;
    grid-template-columns: 95px 1fr;
    gap: .7rem;
    text-align: start;
    box-shadow: 0 0 10px #00000010;
    cursor: pointer;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.listing-thumbnail {
    object-fit: cover;
    object-position: center 0;
    height: 95px;
    aspect-ratio: 1 / 1;
    border-radius: var(--border-radius-s);
}
.listing-information {
    position: relative;
    margin: .3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.listing-information img {
    height: 14px;
}
.listing-options {
    position: absolute;
    top: 0;
    right: .2rem;
    display: flex;
    gap: .5rem;
}
.listing-details {
    display: flex;
    margin-top: .3rem;
    gap: .6rem;
    align-items: center;
}
.title {
    font-family: 'Montserrat';
    font-weight: bold;
}
.price {
    color: var(--text-color-secondary);
    font-weight: 600;
    margin-block: .1rem;
}
.adress {
    color: grey;
}

button {
    background-color: transparent;
    border: none;
}
.favorite {
    height: 35px;
    width: 35px;
    background-color: var(--element-color-primary);
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(100% 0, 0% 100%, 0 0);
}
.favorite img {
    height: 12px;
    margin: 5px;
}
@media (min-width: 768px) {
    .list-item {
        grid-template-columns: 140px 1fr;
        padding: 1rem;
        gap: 1rem;
    }
    .listing-thumbnail {
        height: 140px;
    }
    .listing-options img {
        height: 18px;
    }
    .listing-options {
        top: .5rem;
        right: .5rem;
    }
    .favorite {
        height: 55px;
        width: 55px;
        background-color: var(--element-color-primary);
        position: absolute;
        top: 0;
        left: 0;
        clip-path: polygon(100% 0, 0% 100%, 0 0);
    }
    .favorite img {
        height: 20px;
        margin: 7px;
    }
}
/* Transition */ 
.open-enter-from,
.open-leave-to {
    scale: 1.1;
    opacity: 0;
}
.open-enter-active,
.open-leave-active {
    transition: all .5s ease;
}
</style>