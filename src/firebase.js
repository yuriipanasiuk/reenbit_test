// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

initializeApp(firebaseConfig);
