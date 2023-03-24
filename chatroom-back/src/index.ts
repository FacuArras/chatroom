import { rtdb, firestore } from "./db";
import * as express from "express";
import * as cors from "cors";
import * as process from "process";
import * as path from "path";
import { nanoid } from "nanoid";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

const usersCollectionRef = firestore.collection("users");
const roomsCollectionRef = firestore.collection("rooms");

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
        } else {
            querySnapshot.forEach(documentSnapshot => {
                res.status(400).json({
                    id: documentSnapshot.id,
                    message: "El usuario ya existe."
                });
            });
        };
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
        } else {
            querySnapshot.forEach(documentSnapshot => {
                if (documentSnapshot.get("password") === password) {
                    res.status(302).json({
                        id: documentSnapshot.id,
                        name: documentSnapshot.get("name"),
                        message: "Inicio de sesión con el email " + email + " exitoso."
                    });
                } else {
                    res.status(401).json({
                        message: "Contraseña incorrecta."
                    });
                };
            });
        };
    });
});

app.post("/rooms", (req, res) => {
    const { userId } = req.body;

    usersCollectionRef.doc(userId.toString()).get().then(querySnapshot => {
        if (querySnapshot.exists) {
            const roomRef = rtdb.ref("rooms/" + nanoid())
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
        } else {
            res.status(401).json({
                message: "Usuario con el id " + userId + " no registrado."
            });
        };
    });
})

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
        } else {
            res.status(401).json({
                message: "Usuario con el id " + userId + " no registrado."
            });
        };
    });
});

app.post("/messages/:roomId", (req, res) => {
    const { userName, message } = req.body;
    const { roomId } = req.params;

    const roomRef = rtdb.ref("/rooms/" + roomId + "/messages");

    roomRef.push({
        from: userName,
        message: message
    }).then(() => {
        res.status(200).json({
            message: "Mensaje enviado exitosamente.",
        });
    });
});


app.use(express.static(path.join(__dirname, "../chatroom-front/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../chatroom-front/dist/index.html"));
});


app.listen(port, () => {
    console.log(`Aplicación incializada y escuchando en el puerto ${port}`);
});
