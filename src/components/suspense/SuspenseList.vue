<template>
    <ul>
        <SuspenseListItem 
            v-for="(n, index) in amount" :key="index"
        />
        <!-- Limit to 5 listings -->
    </ul>
</template>

<script setup>
import SuspenseListItem from '@/components/suspense/SuspenseListItem.vue';

defineProps({
    amount: Number
})
</script>

<style lang="css" scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin-block: 1rem;   
    }
</style>