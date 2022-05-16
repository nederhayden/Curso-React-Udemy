// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDedGWIL-BCZgjqJSHeDqnkSvUe8Ywpv8Q",
  authDomain: "miniblog-react-d5660.firebaseapp.com",
  projectId: "miniblog-react-d5660",
  storageBucket: "miniblog-react-d5660.appspot.com",
  messagingSenderId: "516792372621",
  appId: "1:516792372621:web:7d0b7317d6763d287f01c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
