// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYC7ufWOcfdmpjegzLRZ3Bt4asctopWQo',
  authDomain: 'netflix-clone-6e235.firebaseapp.com',
  projectId: 'netflix-clone-6e235',
  storageBucket: 'netflix-clone-6e235.appspot.com',
  messagingSenderId: '489062682755',
  appId: '1:489062682755:web:9008ed453b21e8a23d4bb6',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
