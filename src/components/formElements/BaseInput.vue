<template>
    <div class="input-wrapper" >
        <label>{{ label }}</label>
        <input 
            :placeholder="placeholder"
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
            :class="required ? 'validateInput' : ''"
        >

        <p v-if="required" class="errorMessage"></p>
        <!-- If there is an error message display it here -->
    </div>
</template>

<script setup>

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
    },
    required: {
        type: Boolean,
        default: true
    },
    validate: {
        type: String
    }
});

// Emit the value to the vmodel prop
defineEmits(['update:modelValue']);

</script>

<style lang="css" scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
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