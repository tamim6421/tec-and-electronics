
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlCxGu6nR3EpijIKSFUJqzbyPDN3dqKdo",
  authDomain: "tech-and-electronics-shop.firebaseapp.com",
  projectId: "tech-and-electronics-shop",
  storageBucket: "tech-and-electronics-shop.appspot.com",
  messagingSenderId: "236222479391",
  appId: "1:236222479391:web:81d592695dd146c896292a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app