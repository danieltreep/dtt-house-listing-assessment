<template>
    <div class="input-wrapper">
            
        <img :src="imageURL" alt="">
        
        <select 
            @input="$emit('update:modelValue', $event.target.value)" 
            :value="modelValue"
        >
            <option value="">Any</option>
            <option 
                v-for="(option, index) in options" 
                :key="option" 
                :value="values[index]"
            >{{ option }}</option>
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
.input-wrapper {
    display: flex;
    border-radius: var(--border-radius-s);
    gap: .5rem;
    padding: .5rem;
    align-items: center;
    background-color: white;
}
</style>