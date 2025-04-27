<script setup lang="ts">
import TheHeader from '../components/layout/TheHeader.vue';
import PrimaryButton from '@/components/actions/buttons/PrimaryButton.vue';
import RegisterForm from '@/components/layout/Cadastro/RegisterForm.vue';
import DefaultFooter from '@/components/layout/DefaultFooter.vue';
import DefaultModal from '@/components/ui/DefaultModal.vue';
import { ref } from 'vue';

const modalAtivo = ref<string | null>(null);
</script>

<template>
    <TheHeader>
        <template #botoes>
            <router-link to="/">
                <PrimaryButton label="Página Inicial" />
            </router-link>
        </template>
    </TheHeader>

    <RegisterForm />

    <DefaultFooter>
        <template #info>
            <p><strong @click="modalAtivo = 'ajuda'" class="info--reffer">Precisa de ajuda?</strong></p>
            <teleport to="body">
                <DefaultModal v-if="modalAtivo === 'ajuda'" titulo="Criar Conta" @fechar="modalAtivo = null">
                    <template #descricao>
                        <div class="modal__info">
                            <h3>1. Digite seu nome completo</h3>
                            <p><strong>O que é</strong>: Seu nome e sobrenome (exemplo: Maria Silva).</p>
                            <p><strong>Por que pedir</strong>: Para sabermos como chamar você na plataforma.</p>
                            <h3>2. Digite seu e-mail</h3>
                            <p><strong>O que é</strong>: Seu endereço de e-mail válido (exemplo: maria@gmail.com).</p>
                            <p><strong>Por que pedir</strong>: Será usado para fazer login e para recuperar sua senha,
                                se necessário.</p>
                            <h3>3. Digite sua senha</h3>
                            <p><strong>O que é</strong>: Uma senha que só você sabe.</p>
                            <p><strong>Dica</strong>: Use letras maiúsculas, minúsculas, números e símbolos (ex:
                                Senha123!).</p>
                            <p><strong>Importante</strong>: Nunca compartilhe sua senha com ninguém.</p>
                            <h3>4. Confirme sua senha</h3>
                            <p><strong>O que é</strong>: Digite a mesma senha de antes para confirmar que está certa.
                            </p>
                            <p><strong>Por que pedir</strong>: Para garantir que não houve erro de digitação.</p>
                            <h3>5. Termos de Uso e Política de Privacidade</h3>
                            <p><strong>O que é</strong>: Marque a caixa para mostrar que você leu e aceita as regras do
                                site.</p>
                            <p><strong>Links</strong>: Você pode clicar em Termos de Uso e Política de Privacidade para
                                ler antes de aceitar.</p>
                            <h3>6. Botão “Registrar-se”</h3>
                            <p><strong>O que acontece ao clicar</strong>: Se tudo estiver preenchido corretamente, sua
                                conta será criada.</p>
                            <p><strong>Se algo estiver errado</strong>: Aparecerá uma mensagem dizendo o que precisa
                                corrigir.</p>
                            <h3>7. Já possui conta? Faça login</h3>
                            <p><strong>Para quem é</strong>: Se você já se cadastrou antes, clique em “Faça login” para
                                entrar.</p>
                        </div>
                    </template>
                </DefaultModal>
            </teleport>
        </template>
    </DefaultFooter>
</template>

<style scoped>
.modal__info {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & h3 {
        color: var(--color-gray);
        font-size: 1.25rem;
    }
}

.info--reffer {
    font-weight: 500;
    color: var(--color-dark);
    cursor: pointer;
}
</style>