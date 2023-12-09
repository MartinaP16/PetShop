import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCoPhyLFIu7iCi81ZFeTXDzHCJr4nrkqXg",
  authDomain: "petshop-antartida-f472a.firebaseapp.com",
  projectId: "petshop-antartida-f472a",
  storageBucket: "petshop-antartida-f472a.appspot.com",
  messagingSenderId: "744869151600",
  appId: "1:744869151600:web:e7b6894b833969493b85b5",
  measurementId: "G-ZMKY93N734"
};

export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
