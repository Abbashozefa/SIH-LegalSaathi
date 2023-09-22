import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmvDTUgc1n6LVZttEb5dKTLlQKU3JfydQ",
  authDomain: "chat-5c2db.firebaseapp.com",
  projectId: "chat-5c2db",
  storageBucket: "chat-5c2db.appspot.com",
  messagingSenderId: "287143789932",
  appId: "1:287143789932:web:f7302d9591b21b5c48df495",
  measurementId: "G-8LWQTT1QQ7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
