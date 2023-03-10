import { Router } from '@vaadin/router';
import { state } from '../../../state';

class LoginPage extends HTMLElement {
    connectedCallback() {
        this.render();
        this.querySelector(".form").addEventListener("submit", e => {
            e.preventDefault();
            const target = e.target as any;
            state.setEmailNameAndPassword(target.email.value, target.password.value);
            state.login(() => {
                if (state.getState().userId) {
                    Router.go("/select");
                };
            });
        });
    };

    render() {
        const style = document.createElement("style");

        this.innerHTML = `
            <div class="header"></div>
            <main class="main">
                <h1 class="title">Bienvenidos!</h1>

                <div class="form-container">
                    <h3 class="form-title">Iniciar sesión</h3>
                    <form class="form">
                        <div class="form-div">
                            <label class="form-label" for="form-email">Tu email:</label>
                            <input type="email" class="form-input" required name="email" id="form-email">
                        </div>
                        <div class="form-container__password">
                            <label class="form-label" for="form-password">Tu contraseña:</label>
                            <input type="password" class="form-input" name="password" required id="form-password">
                            <button type="button" class="form-password__button">
                                <i class="fa-solid fa-eye form-input__icon"></i>
                            </button>
                        </div>
                        <button type="submit" class="form-button">Comenzar</button>
                    </form>
                    <p class="form-signup">No tenés una cuenta? 
                        <a href="/signup" class="form-signup__link">Creala ahora</a>
                    </p>
                </div>
            </main>
        `;
        const buttonEl = document.querySelector(".form-password__button");
        const inputEl = document.querySelector("#form-password") as any;
        const inputIconEl = document.querySelector(".form-input__icon");
        buttonEl.addEventListener("click", e => {
            if (inputEl.type === "password") {
                inputEl.type = "text";
                inputIconEl.classList.remove("fa-eye");
                inputIconEl.classList.add("fa-eye-slash");
            } else {
                inputEl.type = "password";
                inputIconEl.classList.remove("fa-eye-slash");
                inputIconEl.classList.add("fa-eye");
            }
        });
    };
};
customElements.define("login-page", LoginPage);