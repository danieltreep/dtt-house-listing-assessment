<template>
    <Teleport to="body">
        <Transition name="open">
        <div class="modal-wrapper" @keydown.esc="modalActive = false" v-if="modalActive" >
                <dialog open>
                    <h2>Delete listing</h2>
                    <p>Are you sure you want to delete this listing? <br> This action cannot be undone.</p>
                    <button @click="handleDelete" class="delete">YES, DELETE</button>
                    <button @click="modalActive = false" class="return">GO BACK</button>
                </dialog>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// Stores
import { useListingsStore } from '@/stores/listings'
import { useModalStore } from '@/stores/modal'
import { useRecentListingsStore } from '@/stores/recentListings';
import { useFavoritesStore } from '@/stores/favorites';

// Composables
import deleteListing from '@/composables/deleteListing';

const { modalActive, toDeleteListingId } = storeToRefs(useModalStore())
const { deleteListingStore } = useListingsStore();
const { deleteRecentListing } = useRecentListingsStore()
const { deleteFavorite } = useFavoritesStore()

const router = useRouter();

// Delete listing from database, recent listing and API. Then close modal and push to homepage
const handleDelete = () => {

    deleteListing(toDeleteListingId.value)
    deleteListingStore(toDeleteListingId.value)
    deleteRecentListing(toDeleteListingId.value)
    deleteFavorite(toDeleteListingId.value)
    modalActive.value = false
    router.push({name: 'Houses'})

    // CONFIRM DELETION
};
</script>

<style lang="css" scoped>
.modal-wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    inset: 0 0 0 0;
    z-index: 11;
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
h2 {
    font-size: 18px;
}
button {
    padding: .5rem;
    width: 250px;
    border: none;
    border-radius: var(--border-radius-s);
    color: white;
    font-size: 14px;
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

@media (min-width: 768px) {
    dialog {
        padding: 4rem 4.5rem;
    }
}
/* Transition */ 
.open-enter-from,
.open-leave-to {
    scale: 1.1;
    opacity: 0;
}
.open-enter-active,
.open-leave-active {
    transition: all .3s ease;
}
</style>