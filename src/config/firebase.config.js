// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd6ZhsSuwT2HubpwfmcDkk_ILM7t2S1oU",
  authDomain: "dionysosimports-a75f8.firebaseapp.com",
  projectId: "dionysosimports-a75f8",
  storageBucket: "dionysosimports-a75f8.appspot.com",
  messagingSenderId: "394064162296",
  appId: "1:394064162296:web:5b5d117c7d50f977783a0d",
  measurementId: "G-K588K6DT0S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
