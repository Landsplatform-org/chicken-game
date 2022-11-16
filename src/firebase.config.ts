import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxisHaQ-BOhQZ-rFUoUA9tk7p-l30g2-A",
  authDomain: "chicken-game-project.firebaseapp.com",
  projectId: "chicken-game-project",
  storageBucket: "chicken-game-project.appspot.com",
  messagingSenderId: "270538537730",
  appId: "1:270538537730:web:51e05f12872e684b24a01b",
  measurementId: "G-8Q10VW5070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);