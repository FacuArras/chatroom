import { Router } from '@vaadin/router';
import { state } from '../../state';
class SelectPage extends HTMLElement {
    connectedCallback() {
        this.render();
        const selectEl = this.querySelector("#salas-select");
        selectEl.addEventListener("change", ev => {
            const target = ev.target;
            const div = this.querySelector(".form-roomid-div");
            if (target.value === "unir") {
                div.style.display = "block";
                this.querySelector(".form").addEventListener("submit", e => {
                    e.preventDefault();
                    const target = e.target;
                    state.setUserName(target.usuario.value);
                    state.setRoomId(target.roomid.value);
                    state.accessToRoom(() => {
                        Router.go("/chat");
                    });
                });
            }
            else if (target.value === "crear") {
                div.style.display = "none";
                document.querySelector(".form").addEventListener("submit", e => {
                    e.preventDefault();
                    const target = e.target;
                    state.setUserName(target.usuario.value);
                    state.newRoom(() => {
                        Router.go("/chat");
                    });
                });
            }
            else {
                div.style.display = "none";
            }
        });
    }
    ;
    render() {
        const style = document.createElement("style");
        const currentState = state.getState();
        this.innerHTML = `
            <div class="header"></div>
            <main class="main">
                <h1 class="title">Bienvenido ${currentState.name}!</h1>

                <div class="form-container">
                    <form class="form">
                        <div class="form-div">
                            <label class="form-label" for="form-usuario">Tu nombre de usuario:</label>
                            <input type="text" class="form-input" required name="usuario" id="form-usuario">
                        </div>
                        <div class="form-div">
                            <label class="form-label" for="salas-select">Creas una nueva sala o te unís a una existente?</label>
                            <select class="form-input" name="salas" id="salas-select">
                            <option value="crear" selected>Crear sala</option>
                            <option value="unir">Unirse a sala</option>
                            <option value="" selected>Elegí una opción...</option>
                            </select>
                        </div>
                        <div class="form-roomid-div">
                            <label class="form-label" for="form-roomid">Id de la sala:</label>
                            <input type="text" class="form-input" name="roomid" id="form-roomid">
                        </div>
                        <button class="form-button">Comenzar</button>
                    </form>
                </div>
            </main>
        `;
    }
    ;
}
;
customElements.define("select-page", SelectPage);
