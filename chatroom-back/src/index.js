"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
const nanoid_1 = require("nanoid");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
const usersCollectionRef = db_1.firestore.collection("users");
const roomsCollectionRef = db_1.firestore.collection("rooms");
app.post('/signup', function (req, res) {
    const { email } = req.body;
    const { name } = req.body;
    const { password } = req.body;
    usersCollectionRef.where('email', '==', email).get().then(querySnapshot => {
        if (querySnapshot.empty) {
            usersCollectionRef.add({
                name,
                email,
                password
            }).then(documentReference => {
                res.status(201).json({
                    id: documentReference.id,
                    message: "Usuario creado correctamente."
                });
            });
        }
        else {
            querySnapshot.forEach(documentSnapshot => {
                res.status(400).json({
                    id: documentSnapshot.id,
                    message: "El usuario ya existe."
                });
            });
        }
        ;
    });
});
app.post('/login', function (req, res) {
    const { email } = req.body;
    const { password } = req.body;
    usersCollectionRef.where('email', '==', email).get().then(querySnapshot => {
        if (querySnapshot.empty) {
            res.status(404).json({
                message: "El usuario con el email " + email + " no existe."
            });
        }
        else {
            querySnapshot.forEach(documentSnapshot => {
                if (documentSnapshot.get("password") === password) {
                    res.status(302).json({
                        id: documentSnapshot.id,
                        name: documentSnapshot.get("name"),
                        message: "Inicio de sesión con el email " + email + " exitoso."
                    });
                }
                else {
                    res.status(401).json({
                        message: "Contraseña incorrecta."
                    });
                }
                ;
            });
        }
        ;
    });
});
app.post("/rooms", (req, res) => {
    const { userId } = req.body;
    usersCollectionRef.doc(userId.toString()).get().then(querySnapshot => {
        if (querySnapshot.exists) {
            const roomRef = db_1.rtdb.ref("rooms/" + (0, nanoid_1.nanoid)());
            roomRef.set({
                messages: [{ from: "chatroomBot", message: "Bienvenidos a la sala!" }],
                ownerId: userId
            }).then(() => {
                const roomLongId = roomRef.key;
                const roomShortId = 1000 + Math.floor(Math.random() * 999);
                roomsCollectionRef.doc(roomShortId.toString()).set({
                    realTimeDataBaseId: roomLongId,
                }).then(() => {
                    res.status(201).json({
                        message: "Sala creada exitosamente.",
                        id: roomShortId.toString(),
                        rtdbId: roomLongId.toString()
                    });
                });
            });
        }
        else {
            res.status(401).json({
                message: "Usuario con el id " + userId + " no registrado."
            });
        }
        ;
    });
});
app.get("/rooms/:roomId", (req, res) => {
    const { userId } = req.query;
    const { roomId } = req.params;
    usersCollectionRef.doc(userId.toString()).get().then(querySnapshot => {
        if (querySnapshot.exists) {
            roomsCollectionRef.doc(roomId).get().then(querySnapshot => {
                res.status(302).json({
                    message: "Sala obtenida exitosamente.",
                    realTimeDataBaseId: querySnapshot.get("realTimeDataBaseId")
                });
            });
        }
        else {
            res.status(401).json({
                message: "Usuario con el id " + userId + " no registrado."
            });
        }
        ;
    });
});
app.post("/messages/:roomId", (req, res) => {
    const { userName, message } = req.body;
    const { roomId } = req.params;
    const roomRef = db_1.rtdb.ref("/rooms/" + roomId + "/messages");
    roomRef.push({
        from: userName,
        message: message
    }).then(() => {
        res.status(200).json({
            message: "Mensaje enviado exitosamente.",
        });
    });
});
const fileParts = __dirname.split("\\");
fileParts.pop();
fileParts.pop();
const previousFolder = fileParts.join("/");
app.use(express.static(path.join(previousFolder, "/chatroom-front/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(previousFolder, "/chatroom-front/dist/index.html"));
});
app.listen(port, () => {
    console.log(`Aplicación incializada y escuchando en el puerto ${port}`);
});
