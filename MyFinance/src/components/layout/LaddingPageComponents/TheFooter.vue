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
                            <p>Sobre nós</p>
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
                            <p>Termos de Uso</p>
                        </li>
                        <li>
                            <p>Privacidade</p>
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
    padding: 0em 3em;
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
    padding: 2em;
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
    padding: 3em;
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

@media (max-width: 884px) and (max-height: 1280px) {
    .footer__grid {
        display: flex;
        flex-direction: column;
    }
}
</style>