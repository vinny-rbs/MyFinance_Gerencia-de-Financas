<template>
    <div class="backdrop" @click="$emit('fechar')">
        <div class="modal" @click.stop>
            <div class="modal__top">
                <h2>{{ titulo }}</h2>
                <button @click="$emit('fechar')">⨯</button>
            </div>
            <div class="modal__description">
                <slot name="descricao" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
defineProps<{ titulo: string }>()

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
}

.modal {
    display: flex;
    flex-direction: column;
    background: var(--color-light);
    padding: 2em;
    border-radius: 8px;
    max-width: 35em;
    max-height: 65dvh;
    width: 90%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    position: relative;
    gap: 2em;
    animation: ModalFade 300ms ease;
    overflow: auto;
    z-index: 9999;
}

.modal__top {
    display: flex;
    justify-content: space-between;
}

.modal__top button {
    height: 1.5em;
    width: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light-gray);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-gray);
    transition: 300ms all ease-in-out;

    &:hover {
        color: var(--color-dark);
    }
}

.modal__info {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

::v-deep(.PrimaryButton--reffer) {
    height: 3.5em;
    margin-top: 1em;
}

@keyframes ModalFade {
    from {
        opacity: 0;
        transform: translateY(-20vh);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>