<template>
    <div class="sort-bar">
        <button class="sort-by" @click="handleClick('price')">
            <p>Price</p>
        </button>
        <button class="sort-by" @click="handleClick('size')">
            <p>Size</p>
        </button>
        <button class="sort-by" @click="handleClick('year')">
            <p>Year</p>
        </button>
        <div class="active-bar"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useListingsStore } from '@/stores/listings';

const { sortListings } = useListingsStore();

// Translate the active bar based on the button clicked
const styles = ref('0%');

const handleClick = (criteria) => {
    sortListings(criteria)
    if (criteria === 'price') {
        styles.value = '0%'
    } else if (criteria === 'size') {
        styles.value = '100%'
    } else {
        styles.value = '200%'
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
}
.sort-by {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: .6rem 1rem;
    font-size: 12px;
    /* min-width: 140px; */
    border: none;
    color: white;
}
.active-bar {
    background-color: var(--element-color-primary);
    position: absolute;
    inset: 0 auto 0 0;
    width: 33.3%;
    transition: .2s ease-out;
    transform: translateX(v-bind(styles));
}
button {
    background-color: transparent;
    z-index: 1;
}

@media (min-width: 1024px) {
    .sort-by {
        min-width: 140px;
    }
}
</style>