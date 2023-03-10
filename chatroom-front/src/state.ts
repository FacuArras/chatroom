import { rtdb } from "./rtdb";
import { ref, onValue, get } from "firebase/database";
const API_BASE_URL = "http://127.0.0.1:3000";

const state = {
    data: {
        name: "",
        email: "",
        password: "",
        username: "",
        userId: "",
        roomId: "",
        realTimeDataBaseId: "",
        messages: []
    },
    listeners: [],

    init() {
        if (sessionStorage.length === 0) {
            console.log("No hay data guardada en el navegador");
        } else {
            console.log("Hay data guardada en el navegador jeje.");
            console.log(sessionStorage);
            const currentState = this.getState();
            currentState.email = sessionStorage.getItem("email");
            currentState.password = sessionStorage.getItem("password");
            currentState.name = sessionStorage.getItem("name");
            currentState.realTimeDataBaseId = sessionStorage.getItem("realTimeDataBaseId");
            currentState.roomId = sessionStorage.getItem("roomId");
            currentState.userId = sessionStorage.getItem("userId");
            currentState.username = sessionStorage.getItem("username");
            currentState.messages = JSON.parse(sessionStorage.getItem("messages"));
            this.setState(currentState);
        }
    },

    listenToRoom() {
        const currentState = this.getState();
        const messagesRef = ref(rtdb, '/rooms/' + currentState.realTimeDataBaseId + "/messages");

        onValue(messagesRef, (snap) => {
            const messagesFromServer = snap.val();
            if (messagesFromServer) {
                const messagesList = Object.values(messagesFromServer);
                const currentState = this.getState();
                currentState.messages = messagesList;
                this.setState(currentState);
                sessionStorage.setItem("messages", JSON.stringify(currentState.messages));
            };
        });
    },

    getState() {
        return this.data;
    },

    setState(newState) {
        this.data = newState;

        for (const cb of this.listeners) {
            cb();
        }
    },

    setEmailNameAndPassword(email: string, password: string, nombre?: string) {
        const currentState = this.getState();
        currentState.email = email;
        currentState.password = password;
        currentState.name = nombre;
        this.setState(currentState);
        sessionStorage.setItem("email", currentState.email);
        sessionStorage.setItem("password", currentState.password);
    },

    setUserName(username: string) {
        const currentState = this.getState();
        currentState.username = username;
        this.setState(currentState);
        sessionStorage.setItem("username", currentState.username);
    },

    setRoomId(roomId: string) {
        const currentState = this.getState();
        currentState.roomId = roomId;
        this.setState(currentState);
        sessionStorage.setItem("roomId", currentState.roomId);
    },

    pushMessage(message: string) {
        const currentState = this.getState();
        if (currentState.username) {
            fetch(API_BASE_URL + "/messages/" + currentState.realTimeDataBaseId, {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    userName: currentState.username,
                    message
                }),
            });
        } else {
            console.error("No hay nombre de usuario.")
        };
    },

    login(callback?) {
        const currentState = this.getState();

        if (currentState.email) {
            fetch(API_BASE_URL + "/login", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email: currentState.email, password: currentState.password })
            }).then(res => {
                return res.json();
            }).then(data => {
                currentState.userId = data.id;
                currentState.name = data.name;
                this.setState(currentState);
                sessionStorage.setItem("userId", currentState.userId);
                sessionStorage.setItem("name", currentState.name);
                if (callback) {
                    callback();
                };
            });
        } else {
            console.error("No hay un email registrado.");
        };
    },

    signup(callback?) {
        const currentState = this.getState();

        if (currentState.email && currentState.name && currentState.password) {
            fetch(API_BASE_URL + "/signup", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: currentState.email,
                    password: currentState.password,
                    name: currentState.name
                })
            }).then(res => {
                return res.json();
            }).then(data => {
                currentState.userId = data.id;
                sessionStorage.setItem("userId", currentState.userId);
                this.setState(currentState);
                if (callback) {
                    callback();
                };
            });
        } else {
            console.error("Completá bien el formulario porfa.");
        };
    },

    newRoom(callback?) {
        const currentState = this.getState();

        if (currentState.userId) {
            fetch(API_BASE_URL + "/rooms", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ userId: currentState.userId })
            }).then(res => {
                return res.json();
            }).then(data => {
                currentState.roomId = data.id;
                currentState.realTimeDataBaseId = data.rtdbId;
                this.setState(currentState);
                sessionStorage.setItem("roomId", currentState.roomId);
                sessionStorage.setItem("realTimeDataBaseId", currentState.realTimeDataBaseId);
                if (callback) {
                    callback();
                };
            });
        } else {
            console.error("Para crear una nueva sala, tenés que haber iniciado sesión.");
        };
    },

    accessToRoom(callback?) {
        const currentState = this.getState();

        if (currentState.userId) {
            fetch(API_BASE_URL + "/rooms/" + currentState.roomId + "?userId=" + currentState.userId)
                .then(res => {
                    return res.json();
                }).then(data => {
                    currentState.realTimeDataBaseId = data.realTimeDataBaseId;
                    currentState.messages = [];
                    sessionStorage.removeItem("messages");
                    this.setState(currentState);
                    sessionStorage.setItem("realTimeDataBaseId", currentState.realTimeDataBaseId);
                    if (callback) {
                        callback();
                    };
                });
        } else {
            console.error("Fijate que por ahí escribiste mal la id de la room.");
        };
    },

    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    }
};

export { state };