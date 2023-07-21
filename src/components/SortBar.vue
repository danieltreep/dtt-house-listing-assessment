<template>
    <div class="sort-bar">
        <button class="sort-by price" @click="handleClick('price')">
            <p>Price</p>
        </button>
        <button class="sort-by size" @click="handleClick('size')">
            <p>Size</p>
        </button>
        <div class="active-bar"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useListingsStore } from '../stores/listings';

const { sortListings } = useListingsStore();

const styles = ref('0%');

const handleClick = (criteria) => {
    sortListings(criteria)
    if (criteria === 'price') {
        styles.value = '0%'
    } else {
        styles.value = '100%'
    }
};

</script>

<style lang="css" scoped>
    .sort-bar {
        display: flex;
        justify-content: space-between;
        border-radius: var(--border-radius-m);
        background-color: var(--element-color-quartenary);
        overflow: hidden;
        position: relative;
        
        /* margin-left: auto; */
    }
    .sort-by {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: .6rem 1rem;
        font-size: 12px;
        min-width: 120px;
        border: none;
    }
    .sort-by p {
        font-weight: 600;
        font-family: 'Montserrat';
        color: white;
    }
    .active-bar {
        background-color: var(--element-color-primary);
        position: absolute;
        inset: 0 auto 0 0;
        width: 50%;
        transition: .5s;
        transform: translateX(v-bind(styles));
        /* z-index: -1; */
        /* height: 100%;
        width: 100%; */
    }
    button {
        background-color: transparent;
        z-index: 1;
    }
    
</style>