<script setup lang="ts">
import { ref } from 'vue'
import DefaultSidebar from '@/components/layout/DefaultSidebar.vue';
import CallingCard from '@/components/ui/CallingCard.vue'
import ControlFinance from '@/components/layout/Dashboard/ControlFinance.vue';
import ListMove from '@/components/layout/Dashboard/ListMove.vue';

const transacoes = ref<
    { descricao: string; valor: number; data: string; tipo: string }[]
>([])

function adicionarTransacao(transacao: { descricao: string; valor: number; data: string; tipo: string }) {
    transacoes.value.push(transacao)
}

</script>

<template>
    <div class="dashboard__principal">
        <nav>
            <DefaultSidebar />
        </nav>
        <article>
            <CallingCard />
            <div class="dashboard__hero">
                <ControlFinance @nova-transacao="adicionarTransacao" />
                <ListMove :transacoes="transacoes" />
            </div>
        </article>
    </div>
</template>

<style scoped>
.dashboard__principal {
    display: flex;
    gap: clamp(0em, 2vw, 2em);
}

article {
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 2em;
    gap: 2em;

    & .dashboard__hero {
        display: flex;
        justify-content: space-between;
        gap: 2em;
    }
}

@media (max-width: 884px) and (max-height: 1280px) {
    .dashboard__hero {
        flex-direction: column;
    }
}
</style>