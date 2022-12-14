import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwIe5CMsz_JpfvVigEh1B2DPg_5Ee6cIc",
  authDomain: "chicken-game-backend.firebaseapp.com",
  projectId: "chicken-game-backend",
  storageBucket: "chicken-game-backend.appspot.com",
  messagingSenderId: "644982332504",
  appId: "1:644982332504:web:7274f88417e67dd3757e2d"
};

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app);