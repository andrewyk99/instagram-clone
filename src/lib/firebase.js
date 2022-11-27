import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBb0v9hX4dqRC0Sn9GzI1TmOLUirqiKk6A",
    authDomain: "instagram-clone-dcbd0.firebaseapp.com",
    projectId: "instagram-clone-dcbd0",
    storageBucket: "instagram-clone-dcbd0.appspot.com",
    messagingSenderId: "661005463100",
    appId: "1:661005463100:web:1275e224ea4b5bc6ff9d39"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Runs seed (ONLY DO ONCE)
// seedDatabase(firebase);

export { firebase, FieldValue }