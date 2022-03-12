import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLtLK4mvOpjBYl1-lafK8_D_G_f8N4HNA",
    authDomain: "vue-blogger-63e5d.firebaseapp.com",
    projectId: "vue-blogger-63e5d",
    storageBucket: "vue-blogger-63e5d.appspot.com",
    messagingSenderId: "779401570996",
    appId: "1:779401570996:web:783eb4209a80e4e46f45e1"
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };