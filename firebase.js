// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from firebase;

const firebaseConfig = {
  apiKey: "AIzaSyCaz5A7nlIyiEhdC8pziwHfZKG65-0veVI",
  authDomain: "projuct-5390f.firebaseapp.com",
  projectId: "projuct-5390f",
  storageBucket: "projuct-5390f.appspot.com",
  messagingSenderId: "394547444535",
  appId: "1:394547444535:web:d4c375bef2a0efdcc278b2",
  measurementId: "G-DZQ5JT2YQY"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();  
const db = app.firestore();

export default db;