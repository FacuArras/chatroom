import * as admin from "firebase-admin";
import * as serviceAccount from "../key.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://apx-dwf-m6-abc30-default-rtdb.firebaseio.com"
});

const rtdb = admin.database();
const firestore = admin.firestore();

export { rtdb, firestore };