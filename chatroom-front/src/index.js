import { state } from "./state";
import "./pages/welcome-page/login/login.ts";
import "./pages/welcome-page/signup/signup.ts";
import "./pages/select-page/select-page.ts";
import "./pages/chat-page/chat-page.ts";
import "./router";
(function () {
    state.init();
})();
