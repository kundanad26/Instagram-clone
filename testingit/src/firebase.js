import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
    apiKey: "AIzaSyDjRBLztl_CFd1zYNrZlNyRrOhGp4iW96k",
    authDomain: "instagram-48280.firebaseapp.com",
    projectId: "instagram-48280",
    databaseURL:"https://instagram-48280.firebaseio.com",
    storageBucket: "instagram-48280.appspot.com",
    messagingSenderId: "1085114222061",
    appId: "1:1085114222061:web:da77f7b3ac45eddb1093e4",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
