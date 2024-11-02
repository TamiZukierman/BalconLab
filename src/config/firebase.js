// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCniULEtFTYgLcObKs3Ui0qmsN5-tC1oqk",
    authDomain: "balcon-film-ecommerce.firebaseapp.com",
    projectId: "balcon-film-ecommerce",
    storageBucket: "balcon-film-ecommerce.appspot.com",
    messagingSenderId: "977770152034",
    appId: "1:977770152034:web:a6c6fbeaa1cd526b74d13b",
    measurementId: "G-M5FQTZ3KR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

