// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB34-VOGk8Hm6GNnc0eAuxUmAetTKpLIPE",
  authDomain: "roomplay-app.firebaseapp.com",
  projectId: "roomplay-app",
  storageBucket: "roomplay-app.firebasestorage.app",
  messagingSenderId: "32877001340",
  appId: "1:328770013407:web:72a0883e316e0b7140816a"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
