<template>
    <div class="sort-bar">
        <div class="sort-by price">
            <p>Price</p>
        </div>
        <div class="sort-by size">
            <p>Size</p>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="css" scoped>
    .sort-bar {
        display: flex;
        justify-content: space-between;
        border-radius: var(--border-radius-m);
        background-color: var(--element-color-quartenary);
        overflow: hidden;
    }
    .sort-by {
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-family: 'Montserrat';
        color: white;
        width: 100%;
        padding: .6rem 1rem;
        font-size: 12px;
    }
    .price {
        background-color: var(--element-color-primary);

    }
</style>