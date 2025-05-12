<script setup>
import { ref } from 'vue'
import FlatField from '@/components/actions/fields/FlatField.vue'
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue'

const emit = defineEmits(['nova-transacao'])

const descricao = ref('')
const valor = ref(null)
const data = ref('')
const tipo = ref('')

function adicionarTransacao() {
    if (!descricao.value || !valor.value || !data.value || !tipo.value) return

    emit('nova-transacao', {
        descricao: descricao.value,
        valor: Number(valor.value),
        data: data.value,
        tipo: tipo.value
    })

    descricao.value = ''
    valor.value = null
    data.value = ''
    tipo.value = ''
}

</script>

<template>
    <div class="transacoes-container">
        <h2>Nova Transação</h2>
        <form @submit.prevent="adicionarTransacao" class="formulario">
            <FlatField v-model="tipo" info="Tipo de Transação" tag="select">
                <template #adicional>
                    <option value="" selected disabled>Tipo</option>
                    <option value="receita">Receita</option>
                    <option value="despesa">Despesa</option>
                </template>
            </FlatField>
            <FlatField v-model.number="valor" info="Valor (R$)" tag="input" type="number" placeholder="R$ 0,00" />
            <FlatField v-model="data" info="Data" tag="input" type="date" />
            <FlatField v-model="descricao" info="Descrição" tag="textarea" placeholder="Digite sua mensagem aqui..." />
            <PrimaryButton label="Adicionar" />
        </form>
    </div>
</template>

<style scoped>
.transacoes-container {
    width: 100%;
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

.formulario {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & button {
        margin-top: 1em;
    }
}
</style>