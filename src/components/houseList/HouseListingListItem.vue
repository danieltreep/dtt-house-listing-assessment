<template>
    <router-link :to="{name: 'SingleListing', params: {id: listing.id}}">
        <li class="list-item" tabindex="0" >
            <img class="listing-thumbnail" :src="listing.image" alt="listing ...">
            <div class="listing-information">
                <p class="title">{{ listing.location.street }} {{ listing.location.houseNumber }} {{ listing.location?.houseNumberAddition }}</p>
                <p class="price">&euro; {{ numberWithCommas(listing.price) }}</p>
                <p class="adress">{{ listing.location.zip }} {{ listing.location.city }}</p>
    
                <div class="listing-details">
                    <img src="@/assets/icons/ic_bed@3x.png" alt="">
                    <p>{{ listing.rooms.bedrooms }}</p>
                    <img src="@/assets/icons/ic_bath@3x.png" alt="">
                    <p>{{ listing.rooms.bathrooms }}</p>
                    <img src="@/assets/icons/ic_size@3x.png" alt="">
                    <p>{{ listing.size }} m2</p>
                </div>
    
                <div class="listing-options" v-if="listing.madeByMe">
                    <button @click.stop.prevent="handleEdit">
                        <img src="@/assets/icons/ic_edit@3x.png" alt="">
                    </button>
                    <button>
                        <img @click.stop.prevent="modalActive = true" src="@/assets/icons/ic_delete@3x.png" alt="">
                    </button>
                </div>
                <!-- / Additional listing options if the user owns the listing -->
                <BaseModal v-if="modalActive" @delete="handleDelete" @close-modal="modalActive = false"/>

            </div>
        </li>
    </router-link>
</template>

<script setup>
// External
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Composables
import deleteListing from '@/composables/deleteListing';

// Components
import BaseModal from '@/components/BaseModal.vue';

// Stores
import { useSelectedListingStore } from '@/stores/selectedListing'
import { useListingsStore } from '@/stores/listings'

const props = defineProps({
    listing: Object
});

const router = useRouter();
const { fetchSelectedListing } = useSelectedListingStore()
const { deleteListingStore } = useListingsStore()

// Function that adds dots to a number
// Credit to: https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const modalActive = ref(false);

// Handle delete function that is fired from the modal
const handleDelete = () => {
    console.log('deleted')
    deleteListing(props.listing.id)
    deleteListingStore(props.listing.id)
    modalActive.value = false
    router.push({name: 'Houses'})

    // CONFIRM DELETION

};

// First fetch the selected listing and then push to the edit page
const handleEdit = async () => {
    await fetchSelectedListing(props.listing.id)
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
    }
    .listing-thumbnail {
        /* width: 100%; */
        object-fit: cover;
        object-position: 0 0;
        height: 95px;
        aspect-ratio: 1 / 1;
        border-radius: var(--border-radius-s);
    }
    .listing-information {
        position: relative;
        margin: .2rem 0;
    }
    .listing-information img {
        height: 14px;
    }
    .list-item p {
        font-size: 14px;
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
        margin-top: .8rem;
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

    /* @media (min-width: 1024px) {
        .list-item {
            grid-template-columns: 120px 1fr;
            padding: 1rem;
            gap: 1rem;
        }
        .listing-thumbnail {
            height: 120px;
        }
        .listing-options img {
            height: 18px;
        }
        .listing-options {
            top: .5rem;
            right: .5rem;
            gap: 1rem;
        }
    } */
</style>