import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAo180IqoctOv8lH4qfKsOoBRYRCApvPKE",
    authDomain: "credenceblog-52ca7.firebaseapp.com",
    projectId: "credenceblog-52ca7",
    storageBucket: "credenceblog-52ca7.appspot.com",
    messagingSenderId: "867006048900",
    appId: "1:867006048900:web:0c448d2fb08f974becb0d1"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };