<template>
    <Teleport to="body">
        <div class="modal-wrapper">
            <dialog open>
                <h2>Delete listing</h2>
                <p>Are you sure you want to delete this listing? <br> This action cannot be undone.</p>
                <button @click="$emit('delete')" class="delete">YES, DELETE</button>
                <button @click="$emit('close-modal')" class="return">GO BACK</button>
            </dialog>
        </div>
    </Teleport>
</template>

<script setup>
defineEmits(['close-modal', 'delete']);
</script>

<style lang="css" scoped>
.modal-wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    background: rgba(0, 0, 0, 0.25);
}
dialog {
    padding: 2rem 2.5rem;
    border-radius: var(--border-radius-m);
    border: none;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
button {
    padding: .5rem;
    width: 250px;
    border: none;
    border-radius: var(--border-radius-s);
    color: white;
    font-weight: bold;
}
button.delete {
    background-color: var(--element-color-primary);
}
button.return {
    background-color: var(--element-color-secondary);
}
p {
    color: var(--text-color-secondary);
}
</style>