import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>
);

// Client side rendered app: react (cra)
    // => database using Firebase
    // => react-loading-skeleton
    // styling tailwind

// folder structure
    // src
        // => components
        // => constants
        // => context
        // => helpers
        // => hooks
        // => lib (firebase lives here)
        // => services (firebase function in here)
        // => styles (tailwind's folder (app/tailwind))