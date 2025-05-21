<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)
const message = ref('')

const show = (msg = 'Algo aconteceu...') => {
    message.value = msg
    visible.value = true
    setTimeout(() => visible.value = false, 3000)
}

const closeNotification = () => {
    visible.value = false
}

const listener = (event) => {
    show(event.detail)
}

onMounted(() => {
    window.addEventListener('notify', listener)
})
onBeforeUnmount(() => {
    window.removeEventListener('notify', listener)
})
</script>

<template>
    <div v-if="visible" class="notification">
        <p>{{ message }}</p>
        <button @click="closeNotification">⨯</button>
    </div>
</template>

<style scoped>
.notification {
    max-width: 25em;
    width: 90%;
    position: fixed;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-light);
    padding: 1em;
    gap: 2em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.notification button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5em;
    width: 1.5em;
    min-width: 1.5em;
    padding: 0.25em;
    background: var(--color-light-gray);
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    border-radius: 50%;
}
</style>
