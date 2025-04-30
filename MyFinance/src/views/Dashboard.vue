<script setup lang="ts">
import DefaultSidebar from '@/components/layout/DefaultSidebar.vue';
import Hero from '../components/layout/LaddingPageComponents/Hero.vue';


</script>

<template>
    <div class="dashboard__principal">
        <nav>
            <DefaultSidebar />
        </nav>
        <article>
            <Hero />
        </article>
    </div>
</template>

<style scoped>
.dashboard__principal {
    display: flex;
}
</style>