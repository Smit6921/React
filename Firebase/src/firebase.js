import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDAbtSvVK661h20tbCCS4g50oKNcr-tZHQ",
  authDomain: "react-84b16.firebaseapp.com",
  projectId: "react-84b16",
  storageBucket: "react-84b16.appspot.com",
  messagingSenderId: "661571621597",
  appId: "1:661571621597:web:89d93ef9b58c523922c134",
  measurementId: "G-QDSRWBXBRZ",
  databaseURL : "https://react-84b16-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);