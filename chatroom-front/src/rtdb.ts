import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "jkSSU2t3nKrWCSOlc136o4SZ4NuXl8ctVgDQD41e",
    authDomain: "apx-dwf-m6-abc30.firebaseapp.com",
    databaseURL: "https://apx-dwf-m6-abc30-default-rtdb.firebaseio.com/",
    projectId: "apx-dwf-m6-abc30",
};

const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

export { rtdb };