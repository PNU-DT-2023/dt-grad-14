// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

console.log(process.env.NEXT_PUBLIC_FIREBASE_APPID)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase 앱 초기화 완료"); // Firebase 초기화 완료 메시지 출력

// Firestore 초기화
const firestore = getFirestore(app);
console.log("Firestore 초기화 완료"); // Firestore 초기화 완료 메시지 출력
export default firestore;