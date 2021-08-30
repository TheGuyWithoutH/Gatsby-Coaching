import firebase from "firebase/compat";
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASQQlCNV6bO-tv4emO_nR3rZvO05-WjUI",
    authDomain: "coaching-2022.firebaseapp.com",
    projectId: "coaching-2022",
    storageBucket: "coaching-2022.appspot.com",
    messagingSenderId: "1072328532654",
    appId: "1:1072328532654:web:8c53de690fead9f118c33f",
    measurementId: "G-1BLL1WJWTQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

const firestore = firebase.firestore();

export default firestore;