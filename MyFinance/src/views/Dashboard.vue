<script setup lang="ts">
import DefaultSidebar from '@/components/layout/DefaultSidebar.vue';
import CallingCard from '@/components/ui/CallingCard.vue'


</script>

<template>
    <div class="dashboard__principal">
        <nav>
            <DefaultSidebar />
        </nav>
        <article>
            <CallingCard />
        </article>
    </div>
</template>

<style scoped>
.dashboard__principal {
    display: flex;
    gap: 2em;
}

article {
    width: 100vw;
    padding: 2em;
}
</style>