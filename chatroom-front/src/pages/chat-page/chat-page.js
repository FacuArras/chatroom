import { state } from "../../state";
class ChatPage extends HTMLElement {
    constructor() {
        super(...arguments);
        this.messages = [];
    }
    connectedCallback() {
        state.listenToRoom();
        const currentState = state.getState();
        this.messages = currentState.messages;
        state.subscribe(() => {
            const currentState = state.getState();
            this.messages = currentState.messages;
            this.render();
            const messagesSectionEl = document.querySelector(".messages-section");
            if (messagesSectionEl) {
                messagesSectionEl.scrollTop = messagesSectionEl.scrollHeight;
            }
            ;
        });
        this.render();
    }
    ;
    addListeners() {
        this.querySelector(".send-message__form").addEventListener("submit", e => {
            e.preventDefault();
            const target = e.target;
            state.pushMessage(target["send-message"].value);
        });
    }
    ;
    render() {
        this.innerHTML = `
            <div class="header">
                <p class="header__roomid">Id de la sala: ${state.getState().roomId}</p>
            </div>
            <section class="messages-section">
                ${this.messages.map(m => {
            if (m.from === state.getState().username) {
                return `
                                <div class="message message--enviado">
                                <div class="message-from">${m.from}</div>
                                <div class="message-text message-text--enviado">
                                ${m.message}
                                </div>
                                </div>
                                `;
            }
            else {
                return `
                                    <div class="message message--recibido">
                                    <div class="message-from">${m.from}</div>
                                    <div class="message-text message-text--recibido">
                                    ${m.message}
                                    </div>
                                    </div>
                            `;
            }
        }).join("")}
        </section>
        <section class="send-message">
        <form class="send-message__form">
        <input type="text" class="send-message__form-input" name="send-message" id="send-message">
        <button class="send-message__form-button">Enviar</button>
        </form>
        </section>
        `;
        this.addListeners();
    }
    ;
}
;
customElements.define("chat-page", ChatPage);
