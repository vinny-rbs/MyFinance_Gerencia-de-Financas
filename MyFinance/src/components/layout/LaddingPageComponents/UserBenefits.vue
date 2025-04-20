<script setup>

    import BenefitsCard from '@/components/ui/BenefitsCard.vue';

</script>

<template>
    <div class="benefits__content">
        <h1 class="benefits__title">Benefícios principais</h1>
        <div class="benefits__description">
            <BenefitsCard name="Controle de gastos" description="Acompanhe todas as suas despesas em tempo real e mantenha seu orçamento sob controle." icon="ri-line-chart-line" />
            <BenefitsCard name="Planejamento financeiro" description="Defina metas, crie orçamentos e planeje seu futuro financeiro com facilidade." icon="ri-bank-fill" />
            <BenefitsCard name="Relatórios detalhados" description="Visualize relatórios completos e gráficos intuitivos sobre suas finanças." icon="ri-draft-fill" />
        </div>
    </div>
</template>


<style scoped>

    .benefits__content {
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 4em;
        gap: 2em;
    }

    .benefits__description {
        display: flex;
        justify-content: space-between;
        gap: 3em;
    }

    @media (max-width: 884px) and (max-height: 1280px) {
        .benefits__description {
            flex-direction: column;
        }
    }

</style>