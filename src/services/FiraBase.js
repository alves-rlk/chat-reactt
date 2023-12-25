import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDr5M06k-s8k22k7RrAW7L3IwlVncAhCX8",
  
    authDomain: "redeso.firebaseapp.com",
  
    projectId: "redeso",
  
    storageBucket: "redeso.appspot.com",
  
    messagingSenderId: "987796510149",
  
    appId: "1:987796510149:web:08674628c559aa7828a7ac",
  
    measurementId: "G-EWSLG5EMRN"
  
  };


  const app = firebase.initializeApp(firebaseConfig);
  
  const db = app.firestore();

  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export  { db, auth, provider };