import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFBySbscPMzJJRuKxc9da30g1nHS3wF0U",
    authDomain: "whatsapp-clone-b083f.firebaseapp.com",
    projectId: "whatsapp-clone-b083f",
    storageBucket: "whatsapp-clone-b083f.appspot.com",
    messagingSenderId: "1066333561712",
    appId: "1:1066333561712:web:ca72ec59a2e7179ef365b5"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db= getFirestore(app);