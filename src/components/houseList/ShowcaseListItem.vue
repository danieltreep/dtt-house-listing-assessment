<template>
    <router-link :to="{name: 'SingleListing', params: {id: listing.id}}">
        <li class="list-item" tabindex="0" >
            <img class="listing-thumbnail" :src="listing.image">

            <!-- Showcase list item does not have the listing options like delete and edit directly -->

            <div class="listing-information">
                <h2 class="title">{{ listing.location.street }} {{ listing.location.houseNumber }} {{ listing.location?.houseNumberAddition }}</h2>
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
                <!-- / Three listing details -->
            </div>
        </li>
    </router-link>
</template>

<script setup>

defineProps({
    listing: Object
});

// Function that adds dots to a number
// Credit to: https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

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
.listing-details {
    display: flex;
    margin-top: .3rem;
    gap: .6rem;
    align-items: center;
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

@media (min-width: 1024px) {
    h2 {
        font-size: 18px !important;
    }
}
</style>