<template>
    <div class="input-wrapper">
        <label>{{ label }}</label>
        <input 
            :placeholder="placeholder"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
        >
        <p v-if="error">Error</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
});

defineEmits(['update:modelValue'])
const error = ref(null);

</script>

<style lang="css" scoped>
    
</style>