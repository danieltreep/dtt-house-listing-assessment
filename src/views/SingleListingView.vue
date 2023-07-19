<template>
    <header>
        <img class="image-header" src="@/assets/images/img_placeholder_house@3x.png" alt="">
        <div class="listing-options">
            <router-link :to="{name: 'Houses'}">
                <img src="@/assets/icons/ic_back_white@3x.png" alt="">
            </router-link>
            <img class="edit-listing" src="@/assets/icons/ic_edit_white@3x.png" alt="">
            <img src="@/assets/icons/ic_delete_white@3x.png" alt="">
        </div>
    </header>
    <main>
        <section class="listing-information">
            <h1>Stokvisstraat 132</h1>

            <div class="listing-details">
                <img src="@/assets/icons/ic_location@3x.png">
                <p>1011 AA Amsterdam</p>
            
                <br>
            
                <img src="@/assets/icons/ic_price@3x.png">
                <p>500.000</p>
            
                <img src="@/assets/icons/ic_size@3x.png">
                <p>120 m2</p>

                <img src="@/assets/icons/ic_construction_date@3x.png">
                <p>Built in 1990</p>

                <br>
            
                <img src="@/assets/icons/ic_bed@3x.png">
                <p>1</p>

                <img src="@/assets/icons/ic_bath@3x.png">
                <p>1</p>

                <img src="@/assets/icons/ic_garage@3x.png">
                <p>Yes</p>
            </div>

            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet repellat nemo aut labore corporis suscipit non neque, voluptatem illo! Nulla, autem itaque recusandae doloremque cumque dolores quis illo fugit.</p>
        </section>
        <section class="recommended-section">
            <h2>Recommended for you</h2>
            <HouseListingList />
        </section>
    </main>
</template>

<script setup>
import HouseListingList from '@/components/houseList/HouseListingList.vue'
</script>

<style lang="css" scoped>
    header {
        margin: 0;
        /* position: sticky; */
        top: 0;
        left: 0;
        position: relative;
    }
    .image-header {
        z-index: -1;
        width: 100%;
        filter: brightness(80%);
    }
    .listing-options {
        position: absolute;
        top: 2rem;
        left: 1.5rem;
        right: 1.5rem;
        display: flex;
        gap: 1.5rem;
    }
    .listing-options img {
        height: 18px;
    }
    .edit-listing {
        margin-left: auto;
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
    .recommended-section {
        margin: 1.5rem 0 calc(60px + 2rem);
    }

    @media (min-width: 768px) {
            
    }
</style>