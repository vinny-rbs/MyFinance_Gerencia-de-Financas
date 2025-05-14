<script setup lang="ts">
defineProps<{
    transacoes: {
        descricao: string
        valor: number
        data: string
        tipo: string
    }[]
}>()

function formatarData(dataStr: string) {
    const [ano, mes, dia] = dataStr.split('-')
    return `${dia}/${mes}/${ano}`
}
</script>

<template>

    <div class="ListMove">
        <h2>Transações Recentes</h2>
        <ul class="lista-transacoes">
            <li v-for="(transacao, index) in transacoes" :key="index" :class="transacao.tipo">
                <span class="descricao">{{ transacao.descricao }}</span>
                <span class="data">{{ formatarData(transacao.data) }}</span>
                <span class="valor" :class="transacao.tipo">
                    {{ transacao.tipo === 'receita' ? '+' : '-' }} R$ {{ transacao.valor.toFixed(2) }}
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.ListMove {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    background: var(--color-light);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    & h2 {
        font-size: 1.25rem;
        color: var(--color-dark-purble);
    }
}

.lista-transacoes {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
}

.lista-transacoes li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #ccc;
    padding: 0.5rem 0;
}

.lista-transacoes .descricao {
    flex: 1;
    font-weight: 500;
}

.lista-transacoes .data {
    color: #777;
    font-size: 0.9rem;
    margin-right: 1rem;
}

.lista-transacoes .valor.receita {
    color: green;
    font-weight: bold;
}

.lista-transacoes .valor.despesa {
    color: red;
    font-weight: bold;
}
</style>
