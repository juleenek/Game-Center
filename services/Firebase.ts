import firebase from 'firebase/compat/app';
import 'firebase/firestore';

// Add your Firebase configuration here
const firebaseConfig = {
  // Your Firebase configuration
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };