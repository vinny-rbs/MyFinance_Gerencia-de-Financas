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

    <footer>
        <div class="footer__grid">
            <div class="footer__block">
                <img class="footer__image" src="../../../assets/imgs/PigFinance.png" alt="">
                <p>A plataforma completa para você controlar suas finanças com facilidade e eficiência.</p>
            </div>
            <div class="footer__block">
                <p class="footer__title--reffer">Links Uteis</p>
                <nav>
                    <ul class="footer__list">
                        <li>
                            <p @click="modalAtivo = 'sobre'">Sobre nós</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'sobre'" titulo="Sobre nós"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <p>Fundada em 2025, a MyFinance nasceu com a missão de simplificar o
                                                gerenciamento
                                                financeiro para todos os brasileiros.</p>
                                            <p>Nossa equipe é formada por especialistas em finanças e tecnologia,
                                                comprometidos em oferecer as melhores soluções para o controle
                                                financeiro
                                                pessoal e empresarial.</p>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </teleport>
                        </li>
                        <li>
                            <p>Contato</p>
                        </li>
                        <li>
                            <p>Blog</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__block">
                <p class="footer__title--reffer">Legal</p>
                <nav>
                    <ul class="footer__list">
                        <li>
                            <p @click="modalAtivo = 'termo'">Termos de Uso</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'termo'" titulo="Termos de Uso"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <h3>1. Aceitação dos Termos</h3>
                                            <p>Ao acessar e usar os serviços da MyFinance, você concorda com estes
                                                Termos de
                                                Uso. Se você não concordar com qualquer parte destes termos, não poderá
                                                acessar ou usar nossos serviços.</p>
                                            <h3>2. Descrição dos Serviços</h3>
                                            <p>A MyFinance oferece ferramentas de gerenciamento financeiro pessoal e
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
                                                gráficos, MyFinancetipos, ícones e imagens, é de propriedade da
                                                MyFinance ou de
                                                seus licenciadores e está protegido por leis de direitos autorais.</p>
                                            <h3>6. Limitação de Responsabilidade</h3>
                                            <p>A MyFinance não será responsável por quaisquer danos indiretos,
                                                incidentais,
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
                        </li>
                        <li>
                            <p @click="modalAtivo = 'privacidade'">Privacidade</p>
                            <teleport to="body">
                                <DefaultModal v-if="modalAtivo === 'privacidade'" titulo="Política de Privacidade"
                                    @fechar="modalAtivo = null">
                                    <template #descricao>
                                        <div class="modal__info">
                                            <h3>1. Informações Coletadas</h3>
                                            <p>Coletamos informações pessoais como nome, endereço de e-mail, informações
                                                de contato e dados financeiros quando você se registra e usa nossos
                                                serviços. Também coletamos informações técnicas como endereço IP, tipo
                                                de navegador e dispositivo.</p>
                                            <h3>2. Uso das Informações</h3>
                                            <p>Utilizamos suas informações para fornecer, manter e melhorar nossos
                                                serviços, processar transações, enviar comunicações relacionadas ao
                                                serviço, e para fins de segurança e prevenção de fraudes.</p>
                                            <h3>3. Compartilhamento de Informações</h3>
                                            <p>Não vendemos suas informações pessoais a terceiros. Podemos compartilhar
                                                suas informações com prestadores de serviços que nos ajudam a operar
                                                nossos serviços, quando exigido por lei, ou com seu consentimento.</p>
                                            <h3>4. Segurança dos Dados</h3>
                                            <p>Implementamos medidas de segurança técnicas e organizacionais para
                                                proteger suas informações contra acesso não autorizado, alteração,
                                                divulgação ou destruição.</p>
                                            <h3>5. Seus Direitos</h3>
                                            <p>Você tem o direito de acessar, corrigir, atualizar ou solicitar a
                                                exclusão de suas informações pessoais. Você também pode se opor ao
                                                processamento de suas informações ou solicitar a portabilidade de seus
                                                dados.</p>
                                            <h3>6. Retenção de Dados</h3>
                                            <p>Mantemos suas informações pessoais pelo tempo necessário para fornecer
                                                nossos serviços e cumprir nossas obrigações legais. Quando não
                                                precisarmos mais de suas informações, excluiremos ou anonimizaremos de
                                                forma segura.</p>
                                            <h3>7. Alterações na Política</h3>
                                            <p>Podemos atualizar esta Política de Privacidade periodicamente.
                                                Notificaremos você sobre quaisquer alterações significativas publicando
                                                a nova Política de Privacidade em nosso site.</p>
                                            <h3>8. Contato</h3>
                                            <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em
                                                contato conosco pelo e-mail: privacidade@MyFinance.com.br</p>
                                        </div>
                                    </template>
                                </DefaultModal>
                            </teleport>
                        </li>
                        <li>
                            <p>Cookies</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__block">
                <p class="footer__title--reffer">Redes Sociais</p>
                <nav>
                    <ul class="footer__list">
                        <li>
                            <i class="ri-instagram-fill"></i>
                        </li>
                        <li>
                            <i class="ri-whatsapp-fill"></i>
                        </li>
                        <li>
                            <i class="ri-linkedin-box-fill"></i>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer__block">
                <p>© 2025 MyFinance. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

</template>

<style scoped>
footer {
    background-color: var(--color-dark);
    padding: 0em clamp(2em, 1vw, 3em);
}

.footer__image {
    filter: invert(1);
}

li,
i {
    cursor: pointer;
    width: fit-content;

    &:hover {
        filter: brightness(150%);
    }
}


i {
    font-size: 1.5rem;
    color: var(--color-gray);
}

.footer__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1em;
}

.footer__block {
    display: flex;
    flex-direction: column;
    padding: 2em clamp(0em, 1vw, 2em);
    gap: 2em;
    grid-row: span 2 / span 2;

    & img {
        width: 2.5em;
    }
}

.footer__block:nth-child(5) {
    border-top: 2px solid rgb(55, 55, 55);
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-column: span 4 / span 4;
    padding: 2em clamp(0em, 1vw, 3em);
}

.footer__list:has(i) {
    justify-content: start;
    flex-direction: row;
    gap: 1em;
}

.footer__title--reffer {
    color: var(--color-light);
    font-weight: 700;
    font-size: var(--size-paragraph);
}

.footer__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5em;
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

@media (max-width: 884px) and (max-height: 1280px) {
    .footer__grid {
        display: flex;
        flex-direction: column;
    }
}
</style>