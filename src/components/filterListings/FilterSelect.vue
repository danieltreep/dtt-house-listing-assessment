<template>
    <div class="input-wrapper">
            
        <img :src="imageURL" alt="">
        
        <select @input="$emit('update:modelValue', $event.target.value)" :value="modelValue">
            <option value="">Any</option>
            <option v-for="(option, index) in options" :key="option" :value="values[index]">{{ option }}</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['update:modelValue'])

const props = defineProps({
    options: Array,
    values: Array,
    img: String,
    modelValue: String
});

const imageURL = ref(new URL(`/src/assets/icons/ic_${props.img}@3x.png`, import.meta.url).href);
</script>

<style lang="css" scoped>
    
select {
    border: none;
    background-color: transparent;
    font-family: 'Open Sans', sans-serif;
    border-right: 5px solid transparent;
    padding-right: .5rem;
    cursor: pointer;
}
img {
    height: 14px;
}
button {
    border: none;
    background-color: transparent;
    padding: 0;
    display: flex;
    gap: .5rem;
    display: none;
    align-items: center;
    font-size: 12px;
    color: var(--text-color-secondary);
}
.input-wrapper {
    display: flex;
    border-radius: var(--border-radius-s);
    gap: .5rem;
    padding: .5rem;
    align-items: center;
    background-color: white;
}

@media (min-width: 768px) {
    button {
        display: flex;
    }
    button p {
        font-size: 14px;
    }
    .filter-bar {
        justify-content: start;
        gap: 1rem;
    }
}
</style>