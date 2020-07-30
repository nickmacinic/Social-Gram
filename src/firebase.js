import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlJqp9gpxndkteAhK7Tqnftxmfr91fSpY",
    authDomain: "socialgram-60278.firebaseapp.com",
    databaseURL: "https://socialgram-60278.firebaseio.com",
    projectId: "socialgram-60278",
    storageBucket: "socialgram-60278.appspot.com",
    messagingSenderId: "833123265276",
    appId: "1:833123265276:web:8abc02dfc5c3c737ae4579",
    measurementId: "G-YB9WZHPBZ1"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};
