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
.input-wrapper {
    display: flex;
    flex-direction: column;
}
label {
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin: 1rem 0 .5rem;
    z-index: 1;
}
input {
    font-family: 'Open Sans';
    font-size: 12px;
    border: none;
    padding: .8rem 0 .8rem 1rem;
    border-radius: var(--border-radius-s);
    z-index: 1;
}
</style>