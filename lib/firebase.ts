import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIzT5gMppYINCsNZwf7YXJ3UCoKSIwDwo",
  authDomain: "micp-926ab.firebaseapp.com",
  projectId: "micp-926ab",
  storageBucket: "micp-926ab.firebasestorage.app",
  messagingSenderId: "534249067184",
  appId: "1:534249067184:web:f5da5f74d40546e46d6175"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);