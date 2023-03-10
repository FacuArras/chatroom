"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = exports.rtdb = void 0;
const admin = require("firebase-admin");
const serviceAccount = require("../key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://apx-dwf-m6-abc30-default-rtdb.firebaseio.com"
});
const rtdb = admin.database();
exports.rtdb = rtdb;
const firestore = admin.firestore();
exports.firestore = firestore;
