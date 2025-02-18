import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBlQ8JkVWIHiBB_P5X-xfUMBNlElHmO1TI",
  authDomain: "vue-3-2024-9eee2.firebaseapp.com",
  projectId: "vue-3-2024-9eee2",
  storageBucket: "vue-3-2024-9eee2.appspot.com",
  messagingSenderId: "340933816653",
  appId: "1:340933816653:web:6203739abd2bd5c5ecc704"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()

export { auth, db};