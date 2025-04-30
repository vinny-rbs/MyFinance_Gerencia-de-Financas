<script setup lang="ts">

defineProps<{
    icon: string,
    text: string
}>();

</script>
<template>
    <div class="menu__link">
        <div class="link__icon">
            <i :class="icon"></i>
        </div>
        <div class="link__text">
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
.menu__link {
    height: 3em;
    min-width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1em;
    border-radius: 12px;
    cursor: pointer;
    transition: 300ms all ease-in-out;
}

.link__icon {
    font-size: 1.5rem;
    color: var(--color-light);
}
</style>