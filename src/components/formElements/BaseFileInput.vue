<template>
    <div class="input-wrapper" >
        <label>{{ label }}</label>
        <label 
            v-show="!imageUrl"
            for="file-input" 
            class="upload-picture" 
            tabindex="0" 
        >
            <img src="@/assets/icons/ic_upload@3x.png" alt="Upload a picture of the listing">
        </label>
        <input 
            type="file"
            id="file-input"
            hidden
            v-bind="$attrs"
            @change="handleChange"
        >
    </div>
    <!-- / Label pointing to file input acts as the input so it can be styled. Only shown if there is no image url or file -->
    
    <div class="image-preview-container" v-if="imageUrl">
        <img class="image-preview" :src="imageUrl" >
        <img 
        class="reset-image" 
        src="@/assets/icons/ic_clear_white@3x.png" 
        alt="Reset image"
        @click="handleReset"    
        >
    </div>
    <!-- / Image preview and reset. Only shown if there is an image link or file -->
    
    <p class="errorMessage"></p>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [File, String],
        default: ''
    },
    imageUrl: {
        type: [File, String],
        default: ''
    }
});

// Emit the value to the vmodel prop
const emit = defineEmits(['update:modelValue'])

// If there is an image, start with that value
const imageUrl = ref(props.imageUrl)

// Reset images when clicked on the clear button and reset the imageUrl and store
const handleReset = () => {
    document.getElementById('file-input').value = ""
    imageUrl.value = ''
    emit('update:modelValue', null)
}

// Select first file on change and create a URL from the location to display a preview
const handleChange = (event) => {
    const selected = event.target.files[0]

    if (selected) {
        imageUrl.value = URL.createObjectURL(selected)
        emit('update:modelValue', selected)
        } else {
        imageUrl.value = ''
        emit('update:modelValue', '')
    }
};
</script>

<style lang="css" scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}
label {
    margin: 1rem 0 .7rem;           
}
.upload-picture {
    border: 2px dashed var(--element-color-quartenary);
    aspect-ratio: 1 / 1;
    width: fit-content;
    padding: 2rem;
    margin-block: .2rem;
    text-align: center;
}
.upload-picture img {
    height: 28px;
}
.image-preview-container {
    position: relative;
    width: fit-content;
}
.image-preview {
    width: 100px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: var(--border-radius-s);
}
.reset-image {
    height: 32px;
    position: absolute;
    top: -.6rem;
    right: -.6rem;
}
</style>