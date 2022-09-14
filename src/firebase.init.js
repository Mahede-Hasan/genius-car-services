// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeNQRxKqWyewo9N8cFnOgm0AuiKWCLcK8",
  authDomain: "genius-car-services-70991.firebaseapp.com",
  projectId: "genius-car-services-70991",
  storageBucket: "genius-car-services-70991.appspot.com",
  messagingSenderId: "1001380331079",
  appId: "1:1001380331079:web:eb4ea3f1da5a26e3173b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;