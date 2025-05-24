<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { user } = useAuth()

let saldo = ref(0);

onMounted(async () => {
    if (!user.id) {
        console.warn('User ID não está disponível ainda.')
        return
    }
    try {
        const resposta = await fetch(`http://localhost:8081/transacao/saldo/${user.id}`)
        const resultado = await resposta.json()
        saldo.value = resultado
    } catch (erro) {
        console.error('Erro ao buscar transações:', erro)
    }
})

const userName = computed(() => user.nome || 'Usuário');

const saldoFormatado = computed(() =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(saldo.value)
)

</script>

<template>
    <div class="callingCard">
        <div class="desc">
            <h3>Bem-vindo, {{ userName }}</h3>
            <p>Acompanhe suas finanças e mantenha seus gastos sob controle.</p>
        </div>
        <div class="cash">
            <h3>{{ saldoFormatado }}</h3>
            <p>Saldo Atual</p>
        </div>
    </div>
</template>

<style scoped>
.callingCard {
    height: auto;
    width: 100%;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-light);
    padding: 2em;
    gap: 2em;
    border-radius: 12px;
    box-shadow: 4px 4px 18px rgba(150, 150, 150, 0.15);
}

.desc {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.cash h3 {
    color: var(--color-blue);
}

@media (max-width: 500px) and (max-height: 1000px) {
    .callingCard {
        text-align: center;
        flex-direction: column;
    }
}
</style>
