<template>
    <form class="search-bar">
        <img 
            class="search-icon" 
            src="@/assets/icons/ic_search@3x.png" 
            alt="Search icon"
        >
        <input 
            type="text" 
            placeholder="Search for a house" 
            v-model="searchTerm"
        >
        <img 
            v-if="searchTerm"
            @click="searchTerm = ''"   
            class="clear-icon" 
            src="@/assets/icons/ic_clear@3x.png" 
            alt="Click here to clear the searchbar" 
        >
    </form>
</template>

<script setup>
import { ref } from 'vue';
const searchTerm = ref(''); 
</script>

<style lang="css" scoped>
    .search-bar {
        background-color: var(--element-color-tertiary);
        padding: .5rem 1rem;
        border-radius: var(--border-radius-s);
        display: flex;
        /* margin: 1.5rem 0; */
    }
    img {
        height: 18px;
    }
    input {
        border: transparent;
        background-color: var(--element-color-tertiary);
        outline: transparent;
        font-family: 'Open Sans';
        font-size: 12px;
    }
    .search-icon {
        padding-right: 1rem;
    }
    .clear-icon {
        margin-left: auto;
    }
    
    @media (min-width: 768px) {
        .search-bar {
            min-width: 350px;
        }
    }
</style>