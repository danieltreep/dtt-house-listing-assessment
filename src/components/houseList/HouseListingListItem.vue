<template>
    <router-link :to="{name: 'SingleListing'}">
        <li class="list-item">
            <img class="listing-thumbnail" src="@/assets/images/img_placeholder_house@3x.png" alt="listing ...">
            <div class="listing-information">
                <h2 class="title">Stokvisstraat 132</h2>
                <p class="price">&euro; 500.000</p>
                <p class="adress">1011 AA, Amsterdam</p>
    
                <div class="listing-details">
                    <img src="@/assets/icons/ic_bed@3x.png" alt="">
                    <p>1</p>
                    <img src="@/assets/icons/ic_bath@3x.png" alt="">
                    <p>1</p>
                    <img src="@/assets/icons/ic_size@3x.png" alt="">
                    <p>120 m2</p>
                </div>
    
                <div class="listing-options">
                    <img src="@/assets/icons/ic_edit@3x.png" alt="">
                    <img src="@/assets/icons/ic_delete@3x.png" alt="">
                </div>
                <!-- / Additional listing options if the user owns the listing -->
    
            </div>
        </li>
    </router-link>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .list-item {
        background-color: var(--background-color-2);
        padding: .7rem;
        margin: 1rem 0;
        border-radius: var(--border-radius-s);
        display: grid;
        grid-template-columns: 1fr 2.3fr;
        gap: .7rem;
        text-align: start;
        box-shadow: 0 0 10px #00000010;
    }
    .listing-thumbnail {
        width: 100%;
        object-fit: cover;
        object-position: 0 0;
        height: 100%;
        border-radius: var(--border-radius-s);
    }
    .listing-information {
        position: relative;
        margin: .2rem 0;
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
        margin-top: .8rem;
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
</style>