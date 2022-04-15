// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import  "firebase/compat/auth"
import "firebase/compat/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyAKigeU6nrudM6-Tc4QQjbdsY_IxBcDHlM",
    authDomain: "knox-marketplace.firebaseapp.com",
    projectId: "knox-marketplace",
    storageBucket: "knox-marketplace.appspot.com",
    messagingSenderId: "786295959114",
    appId: "1:786295959114:web:a8cc959134e2f723fe80b3",
    measurementId: "G-ZY4L2PLT7J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };