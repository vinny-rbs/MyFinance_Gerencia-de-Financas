<script>
import DefaultModal from '@/components/ui/DefaultModal.vue';

export default {
    components: { DefaultModal },
    data() {
        return {
            modalAtivo: null
        }
    }
}

</script>

<template>
    <div class="TermField">
        <input type="checkbox">
        <p>Eu aceito os <strong @click="modalAtivo = 'termo'">Termos de Uso</strong> e a <strong>Política de
                Privacidade</strong></p>
        <teleport to="body">
            <DefaultModal v-if="modalAtivo === 'termo'" titulo="Termos de Uso" @fechar="modalAtivo = null">
                <template #descricao>
                    <div class="modal__info">
                        <h3>1. Aceitação dos Termos</h3>
                        <p>Ao acessar e usar os serviços da logo, você concorda com estes Termos de
                            Uso. Se você não concordar com qualquer parte destes termos, não poderá
                            acessar ou usar nossos serviços.</p>
                        <h3>2. Descrição dos Serviços</h3>
                        <p>A logo oferece ferramentas de gerenciamento financeiro pessoal e
                            empresarial, incluindo controle de gastos, planejamento financeiro e
                            relatórios detalhados.</p>
                        <h3>3. Cadastro e Conta</h3>
                        <p>Para utilizar nossos serviços, você precisa criar uma conta fornecendo
                            informações precisas e completas. Você é responsável por manter a
                            confidencialidade de sua senha e por todas as atividades realizadas em
                            sua conta.</p>
                        <h3>4. Uso dos Serviços</h3>
                        <p>Você concorda em usar nossos serviços apenas para fins legais e de acordo
                            com estes Termos. Você não deve usar nossos serviços para qualquer
                            atividade fraudulenta ou ilegal.</p>
                        <h3>5. Propriedade Intelectual</h3>
                        <p>Todo o conteúdo disponibilizado em nossos serviços, incluindo textos,
                            gráficos, logotipos, ícones e imagens, é de propriedade da logo ou de
                            seus licenciadores e está protegido por leis de direitos autorais.</p>
                        <h3>6. Limitação de Responsabilidade</h3>
                        <p>A logo não será responsável por quaisquer danos indiretos, incidentais,
                            especiais, consequenciais ou punitivos decorrentes do uso ou
                            incapacidade de usar nossos serviços.</p>
                        <h3>7. Alterações nos Termos</h3>
                        <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. As
                            alterações entrarão em vigor imediatamente após a publicação dos Termos
                            atualizados em nosso site.</p>
                        <h3>8. Lei Aplicável</h3>
                        <p>Estes Termos serão regidos e interpretados de acordo com as leis do
                            Brasil, independentemente de conflitos de princípios legais.</p>
                    </div>
                </template>
            </DefaultModal>
        </teleport>
    </div>
</template>

<style scoped>
.TermField {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    gap: 1em;
}

.TermField input {
    min-width: 16px;
    min-height: 16px;
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--color-light);
    border: 2px solid var(--color-gray);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: 200ms all ease-in-out;
}

.TermField input:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
}

.TermField input:checked::after {
    height: 10px;
    content: "⨯";
    color: var(--color-dark);
    font-size: 1rem;
    position: absolute;
    top: -4px;
    left: 0.5px;
}

.TermField p strong {
    color: var(--color-dark);
    font-weight: 500;
    cursor: pointer;
}

.modal__info {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & h3 {
        color: var(--color-gray);
        font-size: 1.25rem;
    }
}
</style>