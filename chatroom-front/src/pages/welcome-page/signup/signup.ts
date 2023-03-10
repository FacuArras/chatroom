import { Router } from '@vaadin/router';
import { state } from '../../../state';

class SignupPage extends HTMLElement {
    connectedCallback() {
        this.render();
        this.querySelector(".form").addEventListener("submit", e => {
            e.preventDefault();
            const target = e.target as any;
            state.setEmailNameAndPassword(target.email.value, target.password.value, target.nombre.value);
            state.signup(() => {
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
                    <h3 class="form-title">Registrame</h3>
                    <form class="form">
                        <div class="form-div">
                            <label class="form-label" for="form-email">Tu email:</label>
                            <input type="email" class="form-input" name="email" id="form-email">
                        </div>
                        <div class="form-div">
                            <label class="form-label" for="form-nombre">Tu nombre:</label>
                            <input type="text" class="form-input" name="nombre" id="form-nombre">
                        </div>
                        <div class="form-container__password">
                            <label class="form-label" for="form-password">Tu contraseña:</label>
                            <input type="password" class="form-input" name="password" id="form-password">
                            <button type="button" class="form-password__button">
                                <i class="fa-solid fa-eye form-input__icon"></i>
                            </button>
                        </div>
                        <button type="submit" class="form-button">Comenzar</button>
                    </form>
                    <p class="form-signup">Ya tenés una cuenta? 
                        <a href="/login" class="form-signup__link"> Iniciar sesión</a>
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
customElements.define("signup-page", SignupPage);