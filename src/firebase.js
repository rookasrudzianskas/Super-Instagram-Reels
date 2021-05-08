import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAfATQhlGhqWJzEUfdJMW620tSLCHCLxFo",
    authDomain: "instagram-reels-5205f.firebaseapp.com",
    projectId: "instagram-reels-5205f",
    storageBucket: "instagram-reels-5205f.appspot.com",
    messagingSenderId: "136434642661",
    appId: "1:136434642661:web:45948b7addb1ee0c036e0c",
    measurementId: "G-LT86Z9SB7J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;